const sketchDom = require("sketch/dom");

let md = "";
const imgRegex = /^image-/;
const getFontName = layer => {
  return layer.sketchObject.fontPostscriptName();
};

const isBold = layer => {
  return getFontName(layer).match(/(Bold|bold)$/);
};

const isItalic = layer => {
  return getFontName(layer).match(/(Italic|italic|Oblique|oblique)$/);
};

const isStrikeThrough = layer => {
  return layer.sketchObject.styleAttributes().NSStrikethrough > 0;
};

const getFontDecoration = layer => {
  if (isBold(layer)) {
    return "**";
  } else if (isItalic(layer)) {
    return "*";
  } else if (isStrikeThrough(layer)) {
    return "~~";
  } else {
    return "";
  }
};

const processLayers = (layer, directoryPath) => {
  // process groups but ignore images group layers or symbols
  if (layer.type === "Group" && !layer.name.match(imgRegex)) {
    layer.layers.reverse().map(layer => {
      processLayers(layer);
    });
  } else {
    parseToMd(layer.name, layer, directoryPath);
  }
};

const parseToMd = (layerName, layer, directoryPath) => {
  // if layer starts with image-* set the layerName to image case
  layerName = layerName.match(imgRegex) ? "image" : layerName;

  switch (layerName) {
    case "heading1":
      md += `# ${layer.text.trim()}\n`;
      break;
    case "heading2":
      md += `## ${layer.text.trim()}\n`;
      break;
    case "heading3":
      md += `### ${layer.text.trim()}\n`;
      break;
    case "heading4":
      md += `#### ${layer.text.trim()}\n`;
      break;
    case "blockquote":
      md += `> ${layer.text.trim()}\n\n`;
      break;
    case "horizontal-rule":
      md += `***\n\n`;
      break;
    case "image":
      sketchDom.export(layer, {
        formats: "jpg",
        output: directoryPath,
        overwriting: true,
        scales: "1"
      });
      md += `![](./${layer.name}.jpg)\n\n`;
      break;
    case "list-unordered":
      layer.text
        .trim()
        .replace(/•\s+/g, "") // remove bullets
        .split(/[\s,]+[\s,]/)
        .forEach((listItem, key, content) => {
          md += `* ${listItem}\n${
            Object.is(content.length - 1, key) ? "\n" : ""
          }`;
        });
      break;
    case "list-ordered":
      layer.text
        .trim()
        .replace(/[0-9].\s+/g, "") // remove digits and dot
        .split(/[\s,]+[\s,]/)
        .forEach((listItem, key, content) => {
          md += `${key + 1}. ${listItem}\n${
            Object.is(content.length - 1, key) ? "\n" : ""
          }`;
        });
      break;
    case "paragraph-multi":
      const multiParContext = getFontDecoration(layer);
      layer.text
        .trim()
        .split("\n")
        .forEach((paragraph, key, content) => {
          md += `${multiParContext}${paragraph}${multiParContext}\n${
            Object.is(content.length - 1, key) ? "\n" : ""
          }`;
        });
      break;
    case "paragraph":
      const simpleParContext = getFontDecoration(layer);
      md += `${simpleParContext}${layer.text.trim()}${simpleParContext}\n\n`;
  }
};

const getMdContent = async (allLayers, artboardName, directoryPath) => {
  await allLayers.map(layer => {
    if (layer.type === "Artboard" && layer.name === artboardName) {
      layer.layers.reverse().map(layer => {
        processLayers(layer, directoryPath);
      });
    }
  });
  return md;
};

export default getMdContent;
