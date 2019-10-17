import React, { useEffect, useContext } from 'react';
import Search from '../search';
import Results from '../results/index';
import Filter from '../filter/index';
import { SearchContext } from '../store/search';

export default function IndexPage() {
	const { setSearch } = useContext(SearchContext);
	useEffect(() => {
		setSearch('https://jsonplaceholder.typicode.com/posts');
	}, []);
	return (
		<div>
			<Search />
			<Filter />
			<Results />
		</div>
	);
}
