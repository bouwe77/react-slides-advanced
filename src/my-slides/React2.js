import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# REACT 101 ⚛️

...
    `;
  return <MarkdownSlide markdown={markdown} />;
};
