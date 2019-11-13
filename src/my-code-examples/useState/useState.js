import React from "react";

function App() {
  const counter = 42;

  return (
    <>
      <h3>{counter}</h3>
    </>
  );
}

export default App;

// What we'll learn in this example:
// * How to use the useState hook to do make a component stateful.
// * How to update state using a user event.
// * That re-rendering takes place after the event handler function has finished.
