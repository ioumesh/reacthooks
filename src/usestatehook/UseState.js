import React from "react";
import { useState } from "react";
function UseStateHook() {
  const [counter, setCounter] = useState(0);
  const increMent = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1>Usestate example</h1>
      <h2>{counter}</h2>
      <button onClick={increMent}>Increment</button>
    </div>
  );
}

export default UseStateHook;
