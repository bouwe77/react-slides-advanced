import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# useContext HOOK

For **consuming** context values
    `;
  return <MarkdownSlide markdown={markdown} />;
};
