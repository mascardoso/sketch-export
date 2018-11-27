import fs from "@skpm/fs";
import getMdContent from "./parse-layers";

const UI = require("sketch/ui");
const sketchDom = require("sketch/dom");
let pageLayers = [];
let selectedArtboard;
let previewOnline;

//create modal icon
const createPluginModalIcon = () => {
  const exportModalIconPath = context.plugin
    .urlForResourceNamed("icon.png")
    .path();
  return NSImage.alloc().initByReferencingFile(exportModalIconPath);
};

// create save dialog
const runSaveDialog = () => {
  const savePanel = NSSavePanel.savePanel();
  savePanel.allowedFileTypes = ["md"];

  // Launch dialog
  const resultSaveDialog = savePanel.runModal();
  if (resultSaveDialog == NSFileHandlingPanelOKButton) {
    const file = `${savePanel.nameFieldStringValue()}.md`;
    const directoryPath = savePanel
      .URL()
      .path()
      .replace(file, ""); // remove file to get only directory
    try {
      // parse to markdown
      parseMd(pageLayers, selectedArtboard, directoryPath, file).then(val => {
        if (previewOnline) {
          saveMdPreviewOnline(val);
        }
      });
    } catch (err) {
      UI.alert("❌", `Something went wrong - ${err}.`);
    }
  }
};

// create export modal
const runExportModal = (context, artboards) => {
  const exportModal = COSAlertWindow.new();
  exportModal.setMessageText("Export to Markdown");
  exportModal.setIcon(createPluginModalIcon());

  // adding the main cta's
  exportModal.addButtonWithTitle("Ok");
  exportModal.addButtonWithTitle("Cancel");

  // Creating the view
  const viewWidth = 300;
  const viewHeight = 130;
  const view = NSView.alloc().initWithFrame(
    NSMakeRect(0, 0, viewWidth, viewHeight)
  );
  exportModal.addAccessoryView(view);

  // Create Dropdown artboards
  const dropdownArtboardLabel = NSTextField.alloc().initWithFrame(
    NSMakeRect(0, 110, viewWidth, 22)
  );
  dropdownArtboardLabel.setStringValue("Select an artboard");
  dropdownArtboardLabel.editable = false;
  dropdownArtboardLabel.selectable = false;
  dropdownArtboardLabel.bezeled = false;
  dropdownArtboardLabel.drawsBackground = false;

  const dropdownArtboards = NSPopUpButton.alloc().initWithFrame(
    NSMakeRect(0, 80, viewWidth / 2, 22)
  );
  artboards.map(artboard => {
    dropdownArtboards.addItemWithTitle(artboard);
  });

  // Create Checkbox for Preview
  const checkboxPreview = NSButton.alloc().initWithFrame(
    NSMakeRect(0, 20, viewWidth, 22)
  );

  // Setting the options for the checkbox
  checkboxPreview.setButtonType(NSSwitchButton);
  checkboxPreview.setBezelStyle(0);
  checkboxPreview.setTitle("Preview the generated markdown online");

  view.addSubview(dropdownArtboardLabel);
  view.addSubview(dropdownArtboards);
  view.addSubview(checkboxPreview);

  const resultExportModal = exportModal.runModal();
  if (resultExportModal != "1000") {
    return;
  } else {
    // save selected artboard
    selectedArtboard = artboards[dropdownArtboards.indexOfSelectedItem()];
    // save option checkbox preview online
    previewOnline = checkboxPreview.stringValue() == 1;
    runSaveDialog();
  }
};

// create export modal
const runPreviewModal = url => {
  const previewModal = COSAlertWindow.new();
  previewModal.setMessageText("Preview Markdown Online");
  previewModal.setIcon(createPluginModalIcon());

  // adding the main cta's
  previewModal.addButtonWithTitle("Go");
  previewModal.addButtonWithTitle("Cancel");

  // Creating the view
  const viewWidth = 300;
  const view = NSView.alloc().initWithFrame(NSMakeRect(0, 0, viewWidth, 0));
  previewModal.addAccessoryView(view);

  const resultPreviewModal = previewModal.runModal();
  if (resultPreviewModal != "1000") {
    return;
  } else {
    // open link
    NSWorkspace.sharedWorkspace().openURL(
      NSURL.URLWithString(`https://stackedit.io/viewer#!url=${url}`)
    );
  }
};

const parseMd = async (pageLayers, artboard, directoryPath, file) => {
  const md = await getMdContent(pageLayers, artboard, directoryPath);
  await saveMd(directoryPath, file, md);
  UI.alert(
    "Export complete.",
    `🎉🎉 ${artboard} was successfully exported to markdown.`
  );
  return md;
};

// save to markdown file
const saveMd = (path, file, content) => {
  fs.writeFileSync(`${path}${file}`, content, "utf8");
};

// save preview of markdown online
const saveMdPreviewOnline = mdContent => {
  fetch("https://file.io", {
    method: "POST",
    body: `text=${mdContent}`
  })
    .then(response => response.json())
    .then(result => runPreviewModal(result.link))
    .catch(error =>
      UI.alert("❌", `Something occured while creating the preview - ${error}.`)
    );
};

// main
export default async context => {
  const document = sketchDom.fromNative(context.document);
  const page = document.selectedPage;
  pageLayers = page.layers;

  // get current artboards in page selected
  let artboards = [];

  pageLayers.map(layer => {
    if (layer.type === "Artboard") {
      artboards.push(layer.name);
    }
  });

  // select at least one artboard
  if (artboards.length === 0) {
    UI.message("❌ You have no artboards in your page. You need at least one.");
  } else {
    runExportModal(context, artboards.reverse());
  }
};
