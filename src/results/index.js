import React from 'react';
import Header from './header';
import Map from './map';
import { withRouter } from 'react-router-dom';

function Results({ history }) {
	return (
		<div className="flex flex-wrap justify-center w-full">
			<div className="w-5/6 flex flex-col justify-between flex-wrap">
				<Header />
				<Map history={history} />
			</div>
		</div>
	);
}
export default withRouter(Results);
