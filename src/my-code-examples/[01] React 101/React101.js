import React, { useState } from "react";
import styles from "./React.module.css";
import Number from "./Number";

export default function App() {
  const [counter, setCounter] = useState(0);

  function decrement() {
    setCounter(counter - 1);
  }

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div className={styles.counter}>
      <h1>Counter App</h1>
      {counter === 0 ? (
        <span>Not Available</span>
      ) : (
        <button className={styles.button} onClick={decrement}>
          -
        </button>
      )}
      <Number number={counter} />
      {counter < 10 && (
        <button className={styles.button} onClick={increment}>
          +
        </button>
      )}
    </div>
  );
}

// class App2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { counter: 0 };
//   }

//   decrement = () => {
//     this.setState({ counter: this.state.counter - 1 });
//   };

//   increment = () => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   render() {
//     return (
//       <div className={styles.counter}>
//         <h1>Counter App</h1>
//         <button className={styles.button} onClick={this.decrement}>
//           -
//         </button>
//         <Number number={this.state.counter} hello="hi" />
//         <button className={styles.button} onClick={this.increment}>
//           +
//         </button>
//       </div>
//     );
//   }
// }
