import React, { useReducer } from "react";
// replacement or alternative of use state hook same purpose
// more than one action use usereducer
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "TOGGLE":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};
const UseReducerHooks = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div>
      {state.count}
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "TOGGLE" });
        }}
      >
        Click me
      </button>
      {state.showText && <p>This is Text</p>}
    </div>
  );
};

export default UseReducerHooks;
