import React from "react";

export default function ButtonNavigation({ goToPrev, goToNext }) {
  return (
    <div>
      <button onClick={goToPrev}>prev</button>
      <button onClick={goToNext}>next</button>
    </div>
  );
}
