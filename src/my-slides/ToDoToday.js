import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# TO DO TODAY

Loop:

* Introduce subject

* Show example code

* Do exercise

* Walkthrough exercise

* 10 minute break

  `;
  return <MarkdownSlide markdown={markdown} />;
};
