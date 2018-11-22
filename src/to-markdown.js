// import fs from "@skpm/fs";
// // import getMdContent from "./parse-layers";

const UI = require("sketch/ui");
const sketchDom = require("sketch/dom");

// const saveMd = (path, docName, artboardName, content) => {
//   fs.writeFileSync(`${path}${docName}-${artboardName}.md`, content, "utf8");
// };

// export default function() {
//   const docName = document.sketchObject.displayName().replace(".sketch", ""); // remove sketch extension
//   const directoryPath = document.path.replace(
//     document.sketchObject.displayName(),
//     ""
//   ); // remove filename
//   const page = document.selectedPage;
//   const allLayers = page.layers;

//   let artboards = [];

//   allLayers.forEach(layer => {
//     if (layer.type === "Artboard") {
//       artboards.push(layer.name);
//     }
//   });

//   if (artboards.length === 0) {
//     UI.message("You have no artboards in your page. You need at least one.");
//   } else {
//     const selection = UI.getSelectionFromUser(
//       "Which artboard you want to export to markdown",
//       artboards.reverse()
//     );
//     const ok = selection[2];
//     const selectedArtboard = artboards[selection[1]];
//     if (ok) {
//       try {
//         // saveMd(
//         //   directoryPath,
//         //   docName,
//         //   selectedArtboard,
//         //   getMdContent(allLayers, selectedArtboard, directoryPath)
//         // );
//         UI.message(
//           `🎉 ${selectedArtboard} was successfully exported to markdown 🎉`
//         );
//       } catch (err) {
//         UI.message(`${err}. Try again.`);
//       }
//     }
//   }
// }
export default context => {
  // const document = context.getSelectedDocument();
  const document = sketchDom.fromNative(context.document);
  const fileName = document.sketchObject.displayName().replace(".sketch", ""); // remove sketch extension
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
        // saveMd(
        //   directoryPath,
        //   docName,
        //   selectedArtboard,
        //   getMdContent(allLayers, selectedArtboard, directoryPath)
        // );
        UI.message(
          `🎉 ${selectedArtboard} was successfully exported to markdown 🎉`
        );
      } catch (err) {
        UI.message(`${err}. Try again.`);
      }
    }
  }

  // const selectedLayers = context.selection;
  // const selectedCount = selectedLayers.count();

  // /* Make sure there is at least 1 layer to fill. */
  // if (!selectedCount) {
  //   context.document.showMessage(
  //     "❌ Cannot perform Bacon Ipsum - No layers selected!"
  //   );
  //   log("❌ Failed - No layers selected!");
  //   return false;
  // }

  // /* Fetch the 'Bacon ipsum' paragraph. */
  // const request = await fetch(
  //   `https://baconipsum.com/api/?type=all-meat&paras=${selectedCount}&start-with-lorem=0`
  // );
  // const baconIpsum = await request.json();

  // /* Fill each layer with 'Bacon ipsum ...' */
  // selectedLayers.forEach((layer, index) => {
  //   layer.stringValue = baconIpsum[index];
  // });

  // context.document.showMessage("🥓 Enjoy your bacon! 🥓");
  // log("✅ Complete!");
};
