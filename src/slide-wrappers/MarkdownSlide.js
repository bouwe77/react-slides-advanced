import styles from "./MarkdownSlide.module.css";
const React = require("react");
const ReactMarkdown = require("react-markdown");

function MarkDownSlide({ markdown }) {
  return (
    <div className={styles.content}>
      <ReactMarkdown source={markdown} />
    </div>
  );
}

export default MarkDownSlide;
