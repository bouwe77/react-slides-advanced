import React from "react";

import styles from "./ExampleSlide.module.css";

export default ({ children }) => (
  <>
    <span className={styles.content}>
      <h1>CODE EXAMPLE</h1>
      <div className={styles.example}>{children}</div>
    </span>
  </>
);
