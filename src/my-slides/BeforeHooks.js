import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# BEFORE HOOKS

Before March 2019
`;
  return <MarkdownSlide markdown={markdown} />;
};
