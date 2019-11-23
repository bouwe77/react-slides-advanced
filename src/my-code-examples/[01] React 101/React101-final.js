import React, { useState } from "react";
import styles from "./React.module.css";

function App() {
  return (
    <>
      <div>
        <h1>My Number App</h1>
      </div>
      <Counter />
    </>
  );
}

function Counter() {
  const [counter, setCounter] = useState(0);

  function decrement() {
    setCounter(counter - 1);
  }

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div className={styles.counter}>
      {counter > 0 && (
        <button className={styles.button} onClick={decrement}>
          -
        </button>
      )}
      <Number number={counter} />
      {counter < 10 ? (
        <button className={styles.button} onClick={increment}>
          +
        </button>
      ) : (
        <>Sorry, not available...</>
      )}
      <br />
      <br />
    </div>
  );
}

function Number({ number }) {
  return (
    <div className={styles.neon}>
      <span className={styles.text}>{number}</span>
      <span className={styles.gradient} />
      <span className={styles.spotlight} />
    </div>
  );
}

export default App;

// What we'll learn in this example:
// * How to use the useState hook to do make a component stateful.
// * How to update state using a user event.
// * That re-rendering takes place after the event handler function has finished.
