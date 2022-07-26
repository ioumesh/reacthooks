import React from "react";
import { useContext } from "react";
import { AppContext } from "./UseContextHook";
const User = () => {
  const { user } = useContext(AppContext);
  return <div>User:{user}</div>;
};

export default User;
