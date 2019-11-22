import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# NEW NEXUS: Samen
    `;
  return (
    <div align="center">
      <MarkdownSlide markdown={markdown} />
      <img src="/New Nexus.jpg" alt="New Nexus" />
    </div>
  );
};
