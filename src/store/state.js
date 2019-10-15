import React from 'react';
import { ResultsProvider } from './results';
import { ModalProvider } from './modal';

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
	return <ProviderComposer contexts={[<ResultsProvider />, <ModalProvider />]}>{children}</ProviderComposer>;
}

export { ContextProvider };
