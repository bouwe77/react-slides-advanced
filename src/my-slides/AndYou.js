import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# AND YOU?

name, employer, daily job, react?
    `;
  return <MarkdownSlide markdown={markdown} />;
};
