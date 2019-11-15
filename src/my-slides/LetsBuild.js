import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# LET'S BUILD...

a totally useless app...

(but still learn a lot!)

[demo]
 `;
  return <MarkdownSlide markdown={markdown} />;
};
