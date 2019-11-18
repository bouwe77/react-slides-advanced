import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# EXERCISE

Replace useState with useReducer
    `;
  return <MarkdownSlide markdown={markdown} />;
};
