import React, { createContext, useState } from 'react';
export const SearchContext = createContext();
export function SearchProvider(props) {
	const [search, setSearch] = useState('https://jsonplaceholder.typicode.com/posts');

	return <SearchContext.Provider value={{ search, setSearch }}>{props.children}</SearchContext.Provider>;
}
