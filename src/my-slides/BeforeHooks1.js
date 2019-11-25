import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# BEFORE HOOKS (March 2019)

State:

- Class components
`;
  return <MarkdownSlide markdown={markdown} />;
};
