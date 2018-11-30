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
    case "horizontal-rule":
      layerData = {
        type: layerName
      };
      break;
    case "image":
      exportJpg(layer, `${directoryPath}/assets/`);
      layerData = {
        type: "image",
        name: layer.name
      };
      break;
    case "list-unordered":
    case "list-ordered":
      layerData = {
        type: layerName,
        list: []
      };
      const regX =
        layerName === "list-unordered"
          ? /•\s+/g // remove bullets
          : /[0-9].\s+/g; // remove digits and dot
      layer.text
        .trim()
        .replace(regX, "")
        .split(/[\s,]+[\s,]/)
        .forEach(listItem => {
          layerData.list.push(listItem);
        });
      break;
    case "paragraph-multi":
      layerData = {
        type: layerName,
        paragraphs: [],
        decoration: getFontDecoration(layer)
      };
      layer.text
        .trim()
        .split("\n")
        .forEach(paragraph => {
          paragraph.length > 0 && layerData.paragraphs.push(paragraph);
        });
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
