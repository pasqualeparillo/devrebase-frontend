import React, { createContext, useState } from 'react';
export const ResultsContext = createContext();
export function ResultsProvider(props) {
	const [results, setResults] = useState();
	const [loading, setLoading] = useState(true);
	return (
		<ResultsContext.Provider
			value={{
				results,
				setResults,
				loading,
				setLoading
			}}
		>
			{props.children}
		</ResultsContext.Provider>
	);
}
