import React, { useMemo, useState } from "react";
// what is useMemo  and why and how we use it
// return memorized value
// memo recalculate nhi krega agar same function and same parameter hai memorization use hota hai performance bdane ke liye
const UseMemoHook = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);
  //   const multiply = () => {
  //     console.log("i am called ******");
  //     return add * 10;
  //   };
  const multiplication = useMemo(
    function multiply() {
      console.log("i am called ******");
      return add * 10;
    },
    [add]
  );
  return (
    <div>
      <h1>Memo Hook</h1>
      {multiplication}
      <br />
      <button onClick={() => setAdd(add + 1)}>Addition</button>

      <span>{add}</span>
      <br />
      <button onClick={() => setMinus(minus - 1)}>Substraction</button>
      <span>{minus}</span>
    </div>
  );
};

export default UseMemoHook;
