import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# CONTAINER & PRESENTATIONAL COMPONENTS

* Container: State, behavior, logic, etc. 

* Presentational: UI components depending on props
    `;
  return <MarkdownSlide markdown={markdown} />;
};
