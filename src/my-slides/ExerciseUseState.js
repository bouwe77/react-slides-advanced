import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# EXERCISE

Implement basic search functionality 

with useState and conditional rendering
    `;
  return <MarkdownSlide markdown={markdown} />;
};
