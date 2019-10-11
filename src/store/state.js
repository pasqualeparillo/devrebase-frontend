import React from "react";
import { ResultsProvider } from "./results";

function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids
      }),
    children
  );
}

function ContextProvider({ children }) {
  return (
    <ProviderComposer contexts={[<ResultsProvider />]}>
      {children}
    </ProviderComposer>
  );
}

export { ContextProvider };
