import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# LET'S BUILD...

A React app! ⚛️

[demo]
 `;
  return <MarkdownSlide markdown={markdown} />;
};
