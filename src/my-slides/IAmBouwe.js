import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# I am **Bouwe**

Software Engineer @ New Nexus

[@bouwe]

[@bouwe]: https://twitter.com/bouwe
  `;
  return <MarkdownSlide markdown={markdown} />;
};
