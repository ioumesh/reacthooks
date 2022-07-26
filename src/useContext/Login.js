import React from "react";
import { useContext } from "react";
import { AppContext } from "./UseContextHook";

const Login = () => {
  const { setUser } = useContext(AppContext);
  const handlChange = (e) => {
    const value = e.target.value;
    setUser(value);
  };
  return (
    <div>
      <input type="text" onChange={handlChange} />
    </div>
  );
};

export default Login;
