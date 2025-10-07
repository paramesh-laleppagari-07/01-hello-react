import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "inc": return { count: state.count + 1 };
    case "dec": return { count: state.count - 1 };
    case "reset": return { count: 0 };
    default: throw new Error();
  }
}

export default function UseReducerCounter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h2>Reducer Counter: {state.count}</h2>
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
      <button onClick={() => dispatch({ type: "dec" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
