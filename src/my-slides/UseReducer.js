import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# useReducer HOOK

useState on steroids... 💪
    `;
  return <MarkdownSlide markdown={markdown} />;
};
