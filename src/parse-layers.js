import sketch from "sketch";

let md = "";
const imgRegex = /^image-/;
const getFontName = layer => {
  return layer.sketchObject
    .style()
    .primitiveTextStyle()
    .attributes()
    ["NSFont"].fontName();
};

const isBold = layer => {
  return getFontName(layer).match(/(Bold|bold)$/);
};

const isItalic = layer => {
  return getFontName(layer).match(/(Italic|italic|Oblique|oblique)$/);
};

const getFontWeight = layer => {
  console.log(layer);
  if (isBold(layer)) {
    return "**";
  } else if (isItalic(layer)) {
    return "*";
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

const readLayers = (allLayers, artboardName, directoryPath) => {
  allLayers.map(layer => {
    if (layer.type === "Artboard" && layer.name === artboardName) {
      layer.layers.reverse().map(layer => {
        processLayers(layer, directoryPath);
      });
    }
  });
};

const parseToMd = (layerName, layer, directoryPath) => {
  // if layer starts with image* set the layerName to image
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
    case "image":
      sketch.export(layer, {
        formats: "jpg",
        output: directoryPath,
        overwriting: true,
        scales: "1"
      });
      md += `![](./${layer.name}.jpg)\n\n`;
      break;
    case "list":
      layer.text
        .trim()
        .split("\n")
        .forEach((listItem, key, content) => {
          md += `* ${listItem}\n${
            Object.is(content.length - 1, key) ? "\n" : ""
          }`;
        });
      break;
    case "paragraph-multi":
      layer.text
        .trim()
        .split("\n")
        .forEach((paragraph, key, content) => {
          md += `${getFontWeight(layer)}${paragraph}${getFontWeight(layer)}\n${
            Object.is(content.length - 1, key) ? "\n" : ""
          }`;
        });
      break;
    case "paragraph":
      md += `${getFontWeight(layer)}${layer.text.trim()}${getFontWeight(
        layer
      )}\n\n`;
  }
};

const getMdContent = (allLayers, artboardName, directoryPath) => {
  readLayers(allLayers, artboardName, directoryPath);
  return md;
};

export default getMdContent;
