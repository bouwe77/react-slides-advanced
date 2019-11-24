import React, { useState } from "react";
import styles from "../[01] React 101/React.module.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className={styles.counter}>
      <button className={styles.button} onClick={() => setCounter(counter - 1)}>
        -
      </button>
      <div className={styles.number}>{counter}</div>
      <button className={styles.button} onClick={() => setCounter(counter + 1)}>
        +
      </button>
    </div>
  );
}

// What we'll learn in this example:
// (1) How to control if and when a useEffect function is executed:
//     * After every render.
//     * Only after the first render (on mount).
//     * Only when a dependency changes.
// (2) That useEffect can be used for separation of concern. (and many other situations...)
// (2) That the return value of a useEffect is a cleanup function.
