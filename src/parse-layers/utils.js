const sketchDom = require("sketch/dom");

const exportJpg = (layer, outputFolder) => {
  sketchDom.export(layer, {
    formats: "jpg",
    output: outputFolder,
    overwriting: true,
    scales: "1"
  });
};

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

export { exportJpg, isBold, isItalic, isStrikeThrough };
