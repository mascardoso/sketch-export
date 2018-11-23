import fs from "@skpm/fs";
import getMdContent from "./parse-layers";

const UI = require("sketch/ui");
const sketchDom = require("sketch/dom");

export default async context => {
  const document = sketchDom.fromNative(context.document);
  const page = document.selectedPage;
  const allLayers = page.layers;

  // save to markdown file
  const saveMd = (path, file, content) => {
    fs.writeFileSync(`${path}${file}`, content, "utf8");
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
      // Configuring save panel
      var savePanel = NSSavePanel.savePanel();
      savePanel.allowedFileTypes = ["md"];

      // Launching alert
      var result = savePanel.runModal();
      if (result == NSFileHandlingPanelOKButton) {
        const file = `${savePanel.nameFieldStringValue()}.md`;
        const directoryPath = savePanel
          .URL()
          .path()
          .replace(file, ""); // remove file to get only directory
        try {
          const md = await getMdContent(
            allLayers,
            selectedArtboard,
            directoryPath
          );
          saveMd(directoryPath, file, md);
          UI.message(
            `🎉 ${selectedArtboard} was successfully exported to markdown 🎉`
          );
        } catch (err) {
          UI.message(`❌ ${err}. Try again.`);
        }
      }
    }
  }
};
