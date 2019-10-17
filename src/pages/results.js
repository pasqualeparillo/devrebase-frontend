import React from 'react';
import Search from '../search';
import Results from '../results/index';
import Filter from '../filter/index';

export default function IndexPage() {
	return (
		<div>
			<Search />
			<Filter />
			<Results />
		</div>
	);
}
