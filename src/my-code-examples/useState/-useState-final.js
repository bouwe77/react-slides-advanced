import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(42);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  return (
    <>
      <h3>{counter}</h3>
      <button onClick={incrementCounter}>+</button>
    </>
  );
}

export default App;
