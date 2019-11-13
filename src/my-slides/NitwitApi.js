import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# NITWIT API

https://nitwit-api.azurewebsites.net
    `;
  return <MarkdownSlide markdown={markdown} />;
};
