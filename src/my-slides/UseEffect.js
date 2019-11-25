import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# useEffect HOOK

Handling side effects
    `;
  return <MarkdownSlide markdown={markdown} />;
};
