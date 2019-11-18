import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# Context is nice, but...

* It makes reuse difficult

* Try state and props first!

👉 https://www.youtube.com/watch?v=3XaXKiXtNjw
`;
  return <MarkdownSlide markdown={markdown} />;
};
