import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# TO DO TODAY

DO {

- subject

- example code

- exercise

- exercise walkthrough

- 10 minute break

} WHILE NOT 17:00

  `;
  return <MarkdownSlide markdown={markdown} />;
};
