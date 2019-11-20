import React, { useState } from "react";
import styles from "./Game.module.css";
import { curious, wow, glad, victorious, key, coffin, door, hurray, restart } from "./emojis";

export default () => {
  const [feeling, setFeeling] = useState(curious);
  const [inventory, setInventory] = useState([]);
  const [isKeyInInventory, setIsKeyInInventory] = useState(false);
  const [coffinOpened, setCoffinOpened] = useState(false);
  const [insideTheRoom, setInsideTheRoom] = useState(false);

  function enterTheRoom() {
    setInsideTheRoom(true);
    setFeeling(victorious);
  }

  function leaveTheRoom() {
    setInsideTheRoom(false);
    setFeeling(curious);
  }

  function openTheCoffin() {
    setCoffinOpened(true);
    setFeeling(wow);
  }

  function closeTheCoffin() {
    setCoffinOpened(false);
    setFeeling(curious);
  }

  function pickUpInventory(item) {
    setInventory([...inventory, item]);
    setFeeling(glad);
    setIsKeyInInventory(true);
  }

  function putBackInventory(item) {
    setInventory([...inventory.map(i => i !== item)]);
    setFeeling(curious);
    setIsKeyInInventory(false);
  }

  function restartGame() {
    //TODO Make sure this matches the initial state...
    setFeeling(curious);
    setInventory([]);
    setIsKeyInInventory(false);
    setCoffinOpened(false);
    setInsideTheRoom(false);
  }

  return (
    <>
      <h1>Enter The Room...</h1>
      <div className={styles.container}>
        <div className={styles.vertical}>
          <Emoji item={feeling} />
          you
          {inventory.map(item => (
            <Emoji key={item} item={item} onClick={() => putBackInventory(item)} />
          ))}
        </div>
        <div className={styles.vertical}>
          <>
            <Emoji
              item={coffin}
              enabled={!insideTheRoom}
              onClick={coffinOpened ? closeTheCoffin : openTheCoffin}
            />
            coffin
            {coffinOpened && !isKeyInInventory && (
              <Emoji
                item={key}
                onClick={
                  isKeyInInventory ? () => putBackInventory(key) : () => pickUpInventory(key)
                }
                enabled={!insideTheRoom}
              />
            )}
          </>
        </div>
        <div className={styles.vertical}>
          {insideTheRoom ? (
            <>
              <Emoji item={hurray} />
              <Emoji item={restart} onClick={restartGame} />
            </>
          ) : (
            <>
              <Emoji
                item={door}
                onClick={insideTheRoom ? leaveTheRoom : enterTheRoom}
                enabled={isKeyInInventory}
              />
              room
            </>
          )}
        </div>
      </div>
    </>
  );
};

const Emoji = ({ item, enabled = true, onClick, ...rest }) => (
  <div
    style={{ fontSize: "60pt" }}
    key={item}
    onClick={enabled ? onClick : undefined}
    {...rest}
  >
    {item}
  </div>
);

const Button = ({ onClick, children, active, enabled = true }) => (
  <button onClick={onClick} disabled={!enabled} className={active && styles.active}>
    {children}
  </button>
);
