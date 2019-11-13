import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# PICS

...or it didn't happen?
    `;
  return <MarkdownSlide markdown={markdown} />;
};
