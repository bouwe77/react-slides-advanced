import React from "react";

export default function App() {
  return <h1>useEffect</h1>;
}

// What we'll learn in this example:
// (1) How to control if and when a useEffect function is executed:
//     * After every render.
//     * Only after the first render (on mount).
//     * Only when a dependency changes.
// (2) That useEffect can be used for separation of concern. (and many other situations...)
// (2) That the return value of a useEffect is a cleanup function.
