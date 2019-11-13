import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# HOOKS

- Let you **compose** state and behavior

- Making component code **declarative** instead of imperative

- Are primitives
    `;
  return <MarkdownSlide markdown={markdown} />;
};
