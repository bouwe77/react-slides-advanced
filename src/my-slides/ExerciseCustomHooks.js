import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# EXERCISE

Create a custom hook

https://bouwe.io/workshops/advanced
    `;
  return <MarkdownSlide markdown={markdown} />;
};
