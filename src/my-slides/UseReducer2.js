import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# useState vs useReducer

![useState vs useReducer](useState-vs-useReducer.png "bla")
`;
  return <MarkdownSlide markdown={markdown} />;
};
