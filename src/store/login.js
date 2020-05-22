import React, { createContext, useState } from "react";
export const LoginContext = createContext();
export function LoginProvider(props) {
  let store = require("store");
  const [user, setUser] = useState(store.get("user") || null);
  return (
    <LoginContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
}
