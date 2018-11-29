import exportTo from "./core";

const fileType = "json";
const fileMarkup = "json";

// main
export default context => {
  exportTo(context, fileType, fileMarkup);
};
