import React, { createContext, useState } from "react";
export const SearchContext = createContext();
export function SearchProvider(props) {
  const [search, setSearch] = useState("http://127.0.0.1:8000/");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {props.children}
    </SearchContext.Provider>
  );
}
