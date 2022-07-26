// create-provider-consumer(usecontext)
import React, { createContext, useState } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);
const UseContextHook = () => {
  const [user, setUser] = useState("");
  return (
    <AppContext.Provider value={{ user, setUser }}>
      <Login />
      <User />
    </AppContext.Provider>
  );
};

export default UseContextHook;
