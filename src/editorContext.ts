import React from "react";
import { IContext } from "./interfaces";

const defaultContext: IContext = {
  markdownText: "",
  setMarkdownText: (text = "") => {},
};

export default React.createContext(defaultContext);
