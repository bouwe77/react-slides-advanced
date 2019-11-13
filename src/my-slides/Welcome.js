import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# &lt; Welcome /&gt;
![React Logo](1280px-React-icon.png "React")
`;
  return <MarkdownSlide markdown={markdown} />;
};
