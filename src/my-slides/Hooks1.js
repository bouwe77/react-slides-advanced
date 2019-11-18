import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# HOOKS

One way of doing things
`;
  return <MarkdownSlide markdown={markdown} />;
};
