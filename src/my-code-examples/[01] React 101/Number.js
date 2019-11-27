import React from "react";
import styles from "./React.module.css";

export default function Number(props) {
  return (
    <div className={styles.neon}>
      <span className={styles.text}>{props.number}</span>
      <span className={styles.gradient} />
      <span className={styles.spotlight} />
    </div>
  );
}
