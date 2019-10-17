import React from 'react';
import SearchBar from './searchBar';
import SearchFilter from './searchFilter';
import { withRouter } from 'react-router-dom';

function Search({ history }) {
	return (
		<div className="flex flex-wrap justify-center w-full mt-20">
			<SearchBar history={history} />
			<SearchFilter />
		</div>
	);
}
export default withRouter(Search);
