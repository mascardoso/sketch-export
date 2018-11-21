import fs from "@skpm/fs";
import getMdContent from "./parse-layers";

const document = require("sketch/dom").getSelectedDocument();
const UI = require("sketch/ui");

const saveMd = (path, docName, artboardName, content) => {
  fs.writeFileSync(`${path}${docName}-${artboardName}.md`, content, "utf8");
};

export default function() {
  const docName = document.sketchObject.displayName().replace(".sketch", ""); // remove sketch extension
  const directoryPath = document.path.replace(
    document.sketchObject.displayName(),
    ""
  ); // remove filename
  const page = document.selectedPage;
  const allLayers = page.layers;

  let artboards = [];

  allLayers.forEach(layer => {
    if (layer.type === "Artboard") {
      artboards.push(layer.name);
    }
  });

  if (artboards.length === 0) {
    UI.message("You have no artboards in your page. You need at least one.");
  } else {
    const selection = UI.getSelectionFromUser(
      "Which artboard you want to export to markdown",
      artboards.reverse()
    );
    const ok = selection[2];
    const selectedArtboard = artboards[selection[1]];
    if (ok) {
      try {
        saveMd(
          directoryPath,
          docName,
          selectedArtboard,
          getMdContent(allLayers, selectedArtboard, directoryPath)
        );
        UI.message(
          `🎉 ${selectedArtboard} was successfully exported to markdown 🎉`
        );
      } catch (err) {
        UI.message(`${err}. Try again.`);
      }
    }
  }
}
