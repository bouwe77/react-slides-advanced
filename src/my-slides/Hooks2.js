import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# HOOKS ARE...

* Part of the React library

* Just javascript functions

* Primitives
    `;
  return <MarkdownSlide markdown={markdown} />;
};
