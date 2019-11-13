import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# useEffect HOOK

Apart from rendering the UI and handling events, does the component have to DO(M) something else?
    `;
  return <MarkdownSlide markdown={markdown} />;
};
