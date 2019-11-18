import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# EXERCISE

Add authentication to the app
    `;
  return <MarkdownSlide markdown={markdown} />;
};
