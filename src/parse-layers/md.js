import { isBold, isItalic, isStrikeThrough } from "./utils";

const sketchDom = require("sketch/dom");

// check font decoration syntax for markdown
const getFontDecorationMd = layer => {
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

// add markdown syntax
const addMarkdownSyntax = (layerName, layer, directoryPath) => {
  let layerMd = "";

  // special case: if layer starts with image-* set the layerName to image case
  layerName = layerName.match(/^image-/) ? "image" : layerName;

  switch (layerName) {
    case "heading1":
      layerMd += `# ${layer.text.trim()}\n`;
      break;
    case "heading2":
      layerMd += `## ${layer.text.trim()}\n`;
      break;
    case "heading3":
      layerMd += `### ${layer.text.trim()}\n`;
      break;
    case "heading4":
      layerMd += `#### ${layer.text.trim()}\n`;
      break;
    case "blockquote":
      layerMd += `> ${layer.text.trim()}\n\n`;
      break;
    case "horizontal-rule":
      layerMd += `***\n\n`;
      break;
    case "image":
      sketchDom.export(layer, {
        formats: "jpg",
        output: directoryPath,
        overwriting: true,
        scales: "1"
      });
      layerMd += `![](./${layer.name}.jpg)\n\n`;
      break;
    case "list-unordered":
      layer.text
        .trim()
        .replace(/•\s+/g, "") // remove bullets
        .split(/[\s,]+[\s,]/)
        .forEach((listItem, key, content) => {
          layerMd += `* ${listItem}\n${
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
          layerMd += `${key + 1}. ${listItem}\n${
            Object.is(content.length - 1, key) ? "\n" : ""
          }`;
        });
      break;
    case "paragraph-multi":
      const multiParContext = getFontDecorationMd(layer);
      layer.text
        .trim()
        .split("\n")
        .forEach((paragraph, key, content) => {
          layerMd += `${multiParContext}${paragraph}${multiParContext}\n${
            Object.is(content.length - 1, key) ? "\n" : ""
          }`;
        });
      break;
    case "paragraph":
      const simpleParContext = getFontDecorationMd(layer);
      layerMd += `${simpleParContext}${layer.text.trim()}${simpleParContext}\n\n`;
      break;
  }
  return layerMd;
};

// parse layer to markdown
const parseLayerToMd = (layerName, layer, directoryPath) => {
  return addMarkdownSyntax(layerName, layer, directoryPath);
};

export default parseLayerToMd;
