import React from "react";
import { useRef } from "react";
// manipulate dom
const UseRefHook = () => {
  const myRef = useRef(null);
  const handleRef = () => {
    return myRef.current.focus();
  };
  return (
    <div>
      <h1>Umesh</h1>
      <input ref={myRef} type="text" />
      <button onClick={handleRef}>OnChange</button>
    </div>
  );
};

export default UseRefHook;
