// it is also used for network call
// before print to the user
import React, { useRef, useEffect, useLayoutEffect } from "react";

const UseLayoutHook = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.value = "Hey Umesh";
  }, []);
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);
  return (
    <div>
      <input
        value="Hello"
        type="text"
        style={{ width: "350px", height: "50px", border: "1px solid green" }}
        ref={inputRef}
      />
    </div>
  );
};

export default UseLayoutHook;
