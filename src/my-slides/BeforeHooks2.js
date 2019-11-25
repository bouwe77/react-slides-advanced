import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# BEFORE HOOKS (March 2019)

Separating UI from state and behavior: 

- Container & Presentational components

- Higher Order Components

- Render props

`;
  return <MarkdownSlide markdown={markdown} />;
};
