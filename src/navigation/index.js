import React from 'react';
import LeftNav from './leftNav';
import RightNav from './rightNav';

export default function Header() {
	return (
		<div className="w-full h-20 flex justify-center z-50 relative bg-teal-100">
			<div className="lg:w-5/6 w-11/12 flex justify-between items-center relative">
				<LeftNav />
				<RightNav />
			</div>
		</div>
	);
}
