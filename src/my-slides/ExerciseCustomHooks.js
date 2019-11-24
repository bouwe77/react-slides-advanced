import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# EXERCISE

Create a custom hook with the useEffect hook
    `;
  return <MarkdownSlide markdown={markdown} />;
};
