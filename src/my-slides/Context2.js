import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# Context is nice, but...

* It makes reuse difficult

* Try state and props first!
`;
  return <MarkdownSlide markdown={markdown} />;
};
