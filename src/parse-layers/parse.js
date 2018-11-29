import parseLayerToMd from "./md";

let contentParsed = "";

// process the layers
const contentprocessLayers = (layer, directoryPath) => {
  // process grouped layers but ignore grouped layers named image-*
  if (layer.type === "Group" && !layer.name.match(/^image-/)) {
    layer.layers.reverse().map(layer => {
      contentprocessLayers(layer);
    });
  } else {
    contentParsed += parseLayerToMd(layer.name, layer, directoryPath);
  }
};

// main
const getParsedContent = async (allLayers, artboardName, directoryPath) => {
  await allLayers.map(layer => {
    if (layer.type === "Artboard" && layer.name === artboardName) {
      layer.layers.reverse().map(layer => {
        contentprocessLayers(layer, directoryPath);
      });
    }
  });
  return contentParsed;
};

export default getParsedContent;
