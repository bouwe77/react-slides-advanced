import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# useState HOOK

Making function components stateful
    `;
  return <MarkdownSlide markdown={markdown} />;
};
