import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# TO DO TODAY

do {

> I introduce a subject

> I show example code

> You do an exercise

> We walkthrough the exercise

> We have a 10 minute break

} while not 17:00

  `;
  return <MarkdownSlide markdown={markdown} />;
};
