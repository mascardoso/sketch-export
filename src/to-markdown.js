import fs from "@skpm/fs";
import getMdContent from "./parse-layers";

const UI = require("sketch/ui");
const sketchDom = require("sketch/dom");

const parseMd = async (allLayers, selectedArtboard, directoryPath, file) => {
  const md = await getMdContent(allLayers, selectedArtboard, directoryPath);
  await saveMd(directoryPath, file, md);
  UI.alert(
    "🎉🎉",
    `${selectedArtboard} was successfully exported to markdown.`
  );
  return md;
};

// save to markdown file
const saveMd = (path, file, content) => {
  fs.writeFileSync(`${path}${file}`, content, "utf8");
};

// preview markdown online
const previewOnline = mdContent => {
  // configure special modal
  const askForPreviewAlert = COSAlertWindow.new();
  askForPreviewAlert.setMessageText("Want to preview your markdown online?");
  askForPreviewAlert.addButtonWithTitle("Ok");
  askForPreviewAlert.addButtonWithTitle("Cancel");

  //get answer
  const resultAlert = askForPreviewAlert.runModal();
  if (resultAlert != "1000") {
    return;
  } else {
    fetch("https://file.io", {
      method: "POST",
      body: `text=${mdContent}`
    })
      .then(response => response.json())
      .then(result =>
        UI.alert(
          "Preview Markdown Online",
          `🌎 https://stackedit.io/viewer#!url=${result.link}`
        )
      )
      .catch(error => console.log(error));
  }
  // console.log(resultAlert);
  // if (resultAlert == NSOKButton) {
  //   console.log("ok");
  // }

  // try {
  // console.log(COSAlertWindow);
  // const listOfLanguages = ["hello"];
  // const choice = UI.getSelectionFromUser("Which Language?", listOfLanguages);
  // console.log(mdContent);
  // const previewOnlineChoice = UI.message(
  //   "Want to preview online your markdown file?"
  // );
  // const okPreviewOnline = previewOnlineChoice[2];
  // if (okPreviewOnline) {
  //   fetch("https://file.io", {
  //     method: "POST",
  //     body: `text=${mdContent}`
  //   })
  //     .then(response => response.result())
  //     .then(result =>
  //       UI.alert(
  //         "Preview Markdown Online",
  //         `🌎 https://stackedit.io/viewer#!url=${result.link}`
  //       )
  //     );
  // }
  // } catch (err) {
  //   UI.alert("❌", ` ${err}. Apologies something went wrong with the preview.`);
  // }
};

export default async context => {
  const document = sketchDom.fromNative(context.document);
  const page = document.selectedPage;
  const allLayers = page.layers;

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
          parseMd(allLayers, selectedArtboard, directoryPath, file).then(val =>
            previewOnline(val)
          );
        } catch (err) {
          UI.alert("❌", `Something went wrong - ${err}.`);
        }
      }
    }
  }
};
