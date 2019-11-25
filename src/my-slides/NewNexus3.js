import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# Samen
    `;
  return (
    <div align="center">
      <MarkdownSlide markdown={markdown} />
      <img src="/New Nexus.jpg" alt="New Nexus" />
    </div>
  );
};
