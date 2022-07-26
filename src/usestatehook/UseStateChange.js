import React from "react";
import { useState } from "react";
const UseStateChange = () => {
  const [inputValue, setInputValue] = useState("umesh");
  const handleOnChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };
  return (
    <div>
      <h2>useState onchange example</h2>
      <input type="text" onChange={handleOnChange} />
      {inputValue}
    </div>
  );
};

export default UseStateChange;
