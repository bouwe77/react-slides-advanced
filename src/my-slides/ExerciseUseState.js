import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# EXERCISE

Implement basic search functionality 

with useState and conditional rendering

https://bouwe.io/workshops/advanced
    `;
  return <MarkdownSlide markdown={markdown} />;
};
