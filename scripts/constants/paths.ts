import { EN_NAME_OF_DIRECTORY_PLACING_DATA_EXCEPT_NAV_HTML } from "./names";
const PATH = require("path");

export const ROOT = PATH.resolve(__dirname, "../../");
export const EN_BLOGS_ENTRY = PATH.resolve(__dirname, "../../EN-Blogs");
export const EN_BLOGS_OUTPUT = PATH.resolve(__dirname, "../../");
export const EN_DIRECTORY_PLACING_DATA_EXCEPT_NAV_HTML = PATH.resolve(
  __dirname,
  `../../${EN_NAME_OF_DIRECTORY_PLACING_DATA_EXCEPT_NAV_HTML}`
);
export const CN_BLOGS_ENTRY = PATH.resolve(__dirname, "../../CN-Blogs");
export const CN_BLOGS_OUTPUT = PATH.resolve(__dirname, "../../cn");
