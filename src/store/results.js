import React, { createContext, useState } from "react";
export const ResultsContext = createContext();
export function ResultsProvider(props) {
  const [results, setResults] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  return (
    <ResultsContext.Provider
      value={{
        results,
        setResults,
        error,
        setError,
        loading,
        setLoading,
        open,
        setOpen,
        data,
        setData
      }}
    >
      {props.children}
    </ResultsContext.Provider>
  );
}
