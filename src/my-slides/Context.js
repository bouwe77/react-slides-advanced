import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# Context

Share state across components to avoid prop drilling

💡 _React Docs: "Apply it sparingly because it makes component reuse difficult"_

    `;
  return <MarkdownSlide markdown={markdown} />;
};
