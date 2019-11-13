import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# EXTRACTING & REUSING BEHAVIOR

- Higher Order Components

- Render Props
`;
  return <MarkdownSlide markdown={markdown} />;
};
