import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# Do You Haz The Codez?

Let me show you around in the exercise code 🔦
  `;
  return <MarkdownSlide markdown={markdown} />;
};
