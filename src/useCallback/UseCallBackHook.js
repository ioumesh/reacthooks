import React, { useCallback, useState } from "react";
import ChildA from "./ChildA";
// what , how and why --performance enhance krne ke liye use hota hai
// usecallback return memorized function

// referential equality react ki wjh se function recreate hota hai
const UseCallBackHook = () => {
  const [count, setCount] = useState(0);
  const [countData, setCountData] = useState(0);

  const learning = useCallback(() => {
    console.log("hi i am usecallback");
  }, []);
  return (
    <div>
      Count
      <ChildA learn={learning} count={countData} />
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCountData(countData + 2);
        }}
      >
        Count set
      </button>
    </div>
  );
};

export default UseCallBackHook;
