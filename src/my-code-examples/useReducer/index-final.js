import React, { useReducer } from "react";
import styles from "./Game.module.css";
import { curious, wow, glad, victorious, key, coffin, door, hurray, restart } from "./emojis";

function gameReducer(state, action) {
  switch (action.type) {
    case "EnterTheRoom": {
      return {
        ...state,
        insideTheRoom: true,
        feeling: victorious
      };
    }
    case "LeaveTheRoom": {
      return { ...state, insideTheRoom: false, feeling: curious };
    }
    case "OpenTheCoffin": {
      return { ...state, coffinOpened: true, feeling: wow };
    }
    case "CloseTheCoffin": {
      return { ...state, coffinOpened: false, feeling: curious };
    }
    case "PickUpInventory": {
      return {
        ...state,
        inventory: [...state.inventory, action.item],
        feeling: glad,
        isKeyInInventory: true
      };
    }
    case "PutBackInventory": {
      return {
        ...state,
        inventory: [...state.inventory.map(i => i !== action.item)],
        feeling: curious,
        isKeyInInventory: false
      };
    }
    case "RestartGame": {
      return initialState;
    }
    default:
      return state;
  }
}

const initialState = {
  feeling: curious,
  inventory: [],
  isKeyInInventory: false,
  coffinOpened: false,
  insideTheRoom: false
};

export default () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const { feeling, inventory, isKeyInInventory, coffinOpened, insideTheRoom } = state;

  return (
    <>
      <h1>Enter The Room...</h1>
      <div className={styles.container}>
        <div className={styles.vertical}>
          <Emoji item={feeling} />
          you
          {inventory.map(item => (
            <Emoji
              key={item}
              item={item}
              onClick={() => dispatch({ type: "PutBackInventory", item })}
            />
          ))}
        </div>
        <div className={styles.vertical}>
          <>
            <Emoji
              item={coffin}
              enabled={!insideTheRoom}
              onClick={
                coffinOpened
                  ? () => dispatch({ type: "CloseTheCoffin" })
                  : () => dispatch({ type: "OpenTheCoffin" })
              }
            />
            coffin
            {coffinOpened && !isKeyInInventory && (
              <Emoji
                item={key}
                onClick={
                  isKeyInInventory
                    ? () => dispatch({ type: "PutBackInventory", item: key })
                    : () => dispatch({ type: "PickUpInventory", item: key })
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
              <Emoji item={restart} onClick={() => dispatch({ type: "RestartGame" })} />
            </>
          ) : (
            <>
              <Emoji
                item={door}
                onClick={
                  insideTheRoom
                    ? () => dispatch({ type: "LeaveTheRoom" })
                    : () => dispatch({ type: "EnterTheRoom" })
                }
                enabled={isKeyInInventory}
              />
              door
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
