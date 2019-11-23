import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default ({ giphyUrl }) => {
  const markdown = `
# Break
  `;
  return (
    <>
      <MarkdownSlide markdown={markdown} />
      <iframe
        src="https://giphy.com/embed/oZEBLugoTthxS"
        width="420"
        height="480"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
        title="coffee"
      />
    </>
  );
};
