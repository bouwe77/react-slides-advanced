import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# useRef

Keep a reference to an element, variable or component across re-renders.

Mostly these are things you can not directly control within your component
and therefore need a reference to it.

Updating refs is a side effect.

Examples: DOM elements, timers, etc. 

👉 https://medium.com/trabe/react-useref-hook-b6c9d39e2022
`;
  return <MarkdownSlide markdown={markdown} />;
};
