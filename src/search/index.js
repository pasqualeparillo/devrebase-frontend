import React from 'react';
import SearchBar from './searchBar';
import { withRouter } from 'react-router-dom';

function Search({ history }) {
	return (
		<div className="flex flex-wrap w-full mt-20 z-20">
			<SearchBar history={history} />
		</div>
	);
}
export default withRouter(Search);
