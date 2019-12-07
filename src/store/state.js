import React from "react";
import { ResultsProvider } from "./results";
import { ModalProvider } from "./modal";
import { SearchProvider } from "./search";
import { PositionProvider } from "./position";
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
    <ProviderComposer
      contexts={[
        <ResultsProvider />,
        <ModalProvider />,
        <SearchProvider />,
        <PositionProvider />
      ]}
    >
      {children}
    </ProviderComposer>
  );
}

export { ContextProvider };
