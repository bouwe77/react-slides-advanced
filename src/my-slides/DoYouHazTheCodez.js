import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# Do You Haz The Codez?

* Exercise app: up and running on your laptop 👍

* Exercises: [bit.ly/react-advanced-exercises]

* Example code: [bit.ly/react-advanced-code]
  `;
  return <MarkdownSlide markdown={markdown} />;
};
