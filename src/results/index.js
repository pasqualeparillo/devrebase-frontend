import React from 'react';
import Header from './header';
import Map from './map';
import { withRouter } from 'react-router-dom';
import Modal from './modal';

function Results() {
	return (
		<div className="flex flex-wrap justify-center w-full">
			<Modal />
			<div className="w-5/6 flex flex-col justify-between flex-wrap">
				<Header />
				<Map />
			</div>
		</div>
	);
}
export default withRouter(Results);
