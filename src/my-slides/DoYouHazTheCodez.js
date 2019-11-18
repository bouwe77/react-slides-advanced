import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# Do You Haz The Codez?

* Let me show you around in the exercise app code 🔦

* Example code and slides: https://codesandbox.io/s/react-slides-advanced-luwo8
  `;
  return <MarkdownSlide markdown={markdown} />;
};
