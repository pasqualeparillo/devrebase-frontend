import React, { createContext, useState } from "react";
export const LoginContext = createContext();
export function LoginProvider(props) {
  const [token, setToken] = useState(null);
  return (
    <LoginContext.Provider
      value={{
        token,
        setToken
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
}
