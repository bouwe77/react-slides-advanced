import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# CONTAINER & PRESENTATIONAL COMPONENTS

Separation of behavioral & UI components
    `;
  return <MarkdownSlide markdown={markdown} />;
};
