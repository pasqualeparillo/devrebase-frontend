import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

export default function IntroCard() {
	return (
		<div className="lg:w-1/4 pr-4">
			<div className="pb-2">
				<p className="text-3xl font-semibold">Solutions designed for all your needs</p>
			</div>
			<div className="py-2">
				<p className="font-medium leading-loose text-base">
					Workspace is our craft. From private offices to whole headquarters, we create spaces that work for
					you.
				</p>
			</div>
			<div className="py-2 w-full flex items-center hover:underline">
				<a className="font-medium text-base" href="/jobs" style={{ color: 'blue' }}>
					View all solutions
				</a>
				<div className="text-2xl px-2" style={{ color: 'blue' }}>
					<IoIosArrowRoundForward />
				</div>
			</div>
		</div>
	);
}
