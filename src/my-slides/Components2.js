import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# COMPONENTS

1] UI reflects current state

2] Update state via user events

3] go to 1...
  `;
  return <MarkdownSlide markdown={markdown} />;
};
