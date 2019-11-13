import React from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";

const KeyboardNavigation = props => {
  const SPACEBAR = "space";
  const LEFT_ARROW = "left";
  const RIGHT_ARROW = "right";

  function handleKey(key) {
    if (key === LEFT_ARROW) props.goToPrev();
    else props.goToNext();
  }

  return (
    <KeyboardEventHandler
      handleKeys={[LEFT_ARROW, RIGHT_ARROW, SPACEBAR]}
      onKeyEvent={(key, e) => handleKey(key)}
    />
  );
};

export default KeyboardNavigation;
