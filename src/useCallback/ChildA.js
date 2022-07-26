import React, { memo } from "react";

const ChildA = ({ learning, count }) => {
  console.log("hi i am child");
  return <div>{count}</div>;
};

export default memo(ChildA);
