import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# &lt; Welcome /&gt;
`;
  return (
    <>
      <div align="center">
        <MarkdownSlide markdown={markdown} />
        <img src="/1280px-React-icon.png" alt="React" />
        <h3>
          React Advanced @ New Nexus
          <br />
          November 26, 2019
        </h3>
      </div>
    </>
  );
};
