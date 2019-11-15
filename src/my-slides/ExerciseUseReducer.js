import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# EXERCISE

Replace useState with useReducer

https://bouwe.io/workshops/advanced
    `;
  return <MarkdownSlide markdown={markdown} />;
};
