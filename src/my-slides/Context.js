import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# Context

Share state across components

to avoid prop drilling
    `;
  return <MarkdownSlide markdown={markdown} />;
};
