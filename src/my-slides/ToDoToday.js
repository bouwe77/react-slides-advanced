import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# TO DO TODAY

![To Do Today](todotoday.png "To Do Today")

  `;
  return <MarkdownSlide markdown={markdown} />;
};
