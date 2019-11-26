import React from 'react';
import Header from './header';
import Map from './map';
import { withRouter } from 'react-router-dom';
import Modal from './modal';
import Filter from './filter';

function Results() {
	return (
		<div className="flex flex-wrap justify-center w-full relative">
			<Modal />
			<Filter />
			<div className="lg:w-4/6 w-11/12 flex flex-col flex-grow justify-between flex-wrap">
				<Header />
				<Map />
			</div>
		</div>
	);
}
export default withRouter(Results);
