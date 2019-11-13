import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# CUSTOM HOOKS

Functions that use one or more React Hooks
    `;
  return <MarkdownSlide markdown={markdown} />;
};
