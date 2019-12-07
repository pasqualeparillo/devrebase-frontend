import React, { createContext, useState } from "react";
export const PositionContext = createContext();
export function PositionProvider(props) {
  const [position, setPosition] = useState({ x: null, y: null });

  return (
    <PositionContext.Provider
      value={{
        position,
        setPosition
      }}
    >
      {props.children}
    </PositionContext.Provider>
  );
}
