import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# SO THESE ARE SOOOOOOOOOOOO 2019?

- Class components

- Container & Presentational components

- Higher Order Components

- Render props

(well, it depends...)
`;
  return <MarkdownSlide markdown={markdown} />;
};
