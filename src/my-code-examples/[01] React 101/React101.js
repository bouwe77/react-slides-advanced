import React, { useState } from "react";
import styles from "./React.module.css";

function App() {
  return (
    <>
      <div>
        <h1>Hello World</h1>
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
    <div>
      {counter > 0 && <button onClick={decrement}>decrement</button>}
      <Number counter={counter} />
      <button onClick={increment}>increment</button>
      <br />
      <br />
    </div>
  );
}

function Number({ counter }) {
  return (
    <div className={styles.neon}>
      <span className={styles.text}>{counter}</span>
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
