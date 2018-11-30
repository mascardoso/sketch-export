import { isBold, isItalic, isStrikeThrough } from "./utils";

// check font decoration syntax for markdown
const getFontDecoration = layer => {
  if (isBold(layer)) {
    return "bold";
  } else if (isItalic(layer)) {
    return "italic";
  } else if (isStrikeThrough(layer)) {
    return "strikethrough";
  } else {
    return "regular";
  }
};

// add layer string
const addLayerString = (layerName, layer, directoryPath) => {
  let layerData;
  switch (layerName) {
    case "heading1":
    case "heading2":
    case "heading3":
    case "heading4":
    case "blockquote":
      layerData = {
        type: layerName,
        text: layer.text.trim()
      };
      break;
    case "paragraph":
      layerData = {
        type: layerName,
        text: layer.text.trim(),
        decoration: getFontDecoration(layer)
      };
      break;
  }

  return layerData;
};

// parse layer to json
const parseLayerToJson = (layerName, layer, directoryPath) => {
  return addLayerString(layerName, layer, directoryPath);
};

export default parseLayerToJson;
