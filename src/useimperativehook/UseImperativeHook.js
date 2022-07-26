import React, { useRef } from "react";
import Button from "../useEffecthook/Button";

const UseImperativeHook = () => {
  const buttonRef = useRef(null);
  return (
    <div>
      <button onClick={() => buttonRef.current.alterToggle()}>
        Button from Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
};

export default UseImperativeHook;
