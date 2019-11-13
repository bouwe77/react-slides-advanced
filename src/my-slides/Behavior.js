import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# BEHAVIOR

Side effects, data fetching, animations, logic, etc.
`;
  return <MarkdownSlide markdown={markdown} />;
};
