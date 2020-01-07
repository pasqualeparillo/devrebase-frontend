import React, { createContext, useState } from "react";
export const ModalContext = createContext();
export function ModalProvider(props) {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const []
  return (
    <ModalContext.Provider
      value={{
        isFilterActive,
        setIsFilterActive
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
}
