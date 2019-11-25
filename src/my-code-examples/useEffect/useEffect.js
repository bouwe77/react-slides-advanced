import React, { useState, useEffect } from "react";
import styles from "../[01] React 101/React.module.css";
import { doExpensiveCalculation } from "./api";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [counter, setCounter] = useState(0);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "Black" : "White",
        color: darkMode ? "White" : "Black"
      }}
    >
      <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      Dark Mode
      <div className={styles.counter}>
        <button className={styles.button} onClick={() => setCounter(counter - 1)}>
          -
        </button>
        <div className={styles.number} style={{ color: darkMode ? "White" : "Black" }}>
          {counter}
        </div>
        <button className={styles.button} onClick={() => setCounter(counter + 1)}>
          +
        </button>
      </div>
      <Calculation number={counter} darkMode={darkMode} />
    </div>
  );
}

function Calculation({ number, darkMode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(0);

  return (
    <>
      <span>{isLoading && "calculating... ⏳"}</span>
      <h1 style={{ color: darkMode ? "White" : "Black" }}>{result}</h1>
    </>
  );
}

//async function callApi() {
//  setIsLoading(true);
//  const result = await doExpensiveCalculation(number);
//  setResult(result);
//  setIsLoading(false);
//}

// What we'll learn in this example:
// (1) How to control if and when a useEffect function is executed:
//     * After every render.
//     * Only after the first render (on mount).
//     * Only when a dependency changes.
// (2) That useEffect can be used for separation of concern. (and many other situations...)
// (2) That the return value of a useEffect is a cleanup function.
