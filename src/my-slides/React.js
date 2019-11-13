import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# REACT

Components, state and behavior
    `;
  return <MarkdownSlide markdown={markdown} />;
};
