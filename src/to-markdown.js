import exportTo from "./core";

const fileType = "md";
const fileMarkup = "markdown";

// main
export default context => {
  exportTo(context, fileType, fileMarkup);
};
