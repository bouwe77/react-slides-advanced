import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# useRef

Keep a reference to an element, variable or component across re-renders.

Mostly these are things you can not directly control within your component
and therefore need a reference to it.
`;
  return <MarkdownSlide markdown={markdown} />;
};
