import parseLayerToMd from "./md";
import parseLayerToJson from "./json";

let contentParsedMd = "";
let contentParsedJson = [];

// main
const getParsedContent = async (
  allLayers,
  artboardName,
  directoryPath,
  fileType
) => {
  // process the content of layers
  const contentprocessLayers = layer => {
    // process grouped layers but ignore grouped layers named image-*
    if (layer.type === "Group" && !layer.name.match(/^image-/)) {
      layer.layers.reverse().map(layer => {
        contentprocessLayers(layer);
      });
    } else {
      if (fileType === "md") {
        contentParsedMd += parseLayerToMd(layer.name, layer, directoryPath);
      } else if (fileType === "json") {
        const obj = parseLayerToJson(layer.name, layer, directoryPath);
        obj && contentParsedJson.push(obj);
      }
    }
  };
  // process the layers
  await allLayers.map(layer => {
    if (layer.type === "Artboard" && layer.name === artboardName) {
      layer.layers.reverse().map(layer => {
        contentprocessLayers(layer);
      });
    }
  });
  if (fileType === "md") {
    return contentParsedMd;
  } else if (fileType === "json") {
    return JSON.stringify(contentParsedJson);
  }
};

export default getParsedContent;
