import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# Context

* Share state across components to avoid prop drilling

* Provider and Consumer (pub-sub)

    `;
  return <MarkdownSlide markdown={markdown} />;
};
