import { exportJpg, isBold, isItalic, isStrikeThrough } from "./utils";

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

  // special case: if layer starts with image-* set the layerName to image case
  layerName = layerName.match(/^image-/) ? "image" : layerName;

  switch (layerName) {
    case "heading1":
    case "heading2":
    case "heading3":
    case "heading4":
      layerData = {
        type: "heading",
        level: parseInt(layerName.replace("heading", "")),
        text: layer.text.trim()
      };
      break;
    case "blockquote":
    case "paragraph":
      layerData = {
        type: layerName,
        text: layer.text.trim(),
        decoration: getFontDecoration(layer)
      };
      break;
    case "image":
      console.log(layer);
      exportJpg(layer, `${directoryPath}/assets/`);
      layerData = {
        type: "image",
        name: layer.name
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
