import React, { createContext, useState } from "react";
import { JOB_SEARCH_URL } from "../constants";
export const SearchContext = createContext();
export function SearchProvider(props) {
  const [search, setSearch] = useState(JOB_SEARCH_URL);
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {props.children}
    </SearchContext.Provider>
  );
}
