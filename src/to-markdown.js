import fs from "@skpm/fs";
import getMdContent from "./parse-layers";

const UI = require("sketch/ui");
const sketchDom = require("sketch/dom");

export default async context => {
  const document = sketchDom.fromNative(context.document);
  const fileName = document.sketchObject.displayName().replace(".sketch", ""); // remove sketch extension
  const directoryPath = document.path.replace(
    document.sketchObject.displayName(),
    ""
  ); // remove filename
  const page = document.selectedPage;
  const allLayers = page.layers;

  // save to markdown file
  const saveMd = (path, docName, artboardName, content) => {
    fs.writeFileSync(`${path}${docName}-${artboardName}.md`, content, "utf8");
  };

  // get current artboards in page selected
  let artboards = [];

  allLayers.forEach(layer => {
    if (layer.type === "Artboard") {
      artboards.push(layer.name);
    }
  });

  // select at least one artboard
  if (artboards.length === 0) {
    UI.message("❌ You have no artboards in your page. You need at least one.");
  } else {
    // prompt artboard
    const selection = UI.getSelectionFromUser(
      "Which artboard you want to export to markdown",
      artboards.reverse()
    );
    const ok = selection[2];
    const selectedArtboard = artboards[selection[1]];
    if (ok) {
      try {
        const md = await getMdContent(
          allLayers,
          selectedArtboard,
          directoryPath
        );
        saveMd(directoryPath, fileName, selectedArtboard, md);
        UI.message(
          `🎉 ${selectedArtboard} was successfully exported to markdown 🎉`
        );
      } catch (err) {
        UI.message(`❌ ${err}. Try again.`);
      }
    }
  }
};
