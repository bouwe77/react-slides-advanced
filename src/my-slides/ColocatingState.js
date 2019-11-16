import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# Colocating State
`;
  return (
    <>
      <MarkdownSlide markdown={markdown} />
      <img
        src="https://kentcdodds.com/static/d2b50fdb8371e7ec209faacac5363111/35838/where-to-put-state.png"
        width="600"
      />

      <h5>
        <a href="https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster">
          copyright &copy; Kent C. Dodds
        </a>
      </h5>
    </>
  );
};
