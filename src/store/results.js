import React, { createContext, useState } from "react";
export const ResultsContext = createContext();
export function ResultsProvider(props) {
  const [results, setResults] = useState([]);

  return (
    <ResultsContext.Provider
      value={{
        results,
        setResults
      }}
    >
      {props.children}
    </ResultsContext.Provider>
  );
}
