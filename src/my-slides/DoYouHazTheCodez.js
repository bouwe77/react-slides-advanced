import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# Do You Haz The Codez?

* Exercise app

* Example code: [bit.ly/react-advanced]
  `;
  return <MarkdownSlide markdown={markdown} />;
};
