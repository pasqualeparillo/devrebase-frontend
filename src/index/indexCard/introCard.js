import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

export default function IntroCard() {
	return (
		<div className="lg:w-1/4 pr-4 lg:m-0 mt-8 mb-8">
			<div className="pb-2">
				<p className="lg:text-3xl md:text-3xl text-2xl font-semibold heading">
					Solutions designed for all your needs
				</p>
			</div>
			<div className="py-2">
				<p className="leading-loose lg:text-base md:text-base text-sm  subtext">
					Workspace is our craft. From private offices to whole headquarters, we create spaces that work for
					you.
				</p>
			</div>
			<div className="py-2 w-full flex items-center hover:underline">
				<a className="text-base subtext" href="/jobs" style={{ color: 'blue' }}>
					View all solutions
				</a>
				<div className="text-xl px-2" style={{ color: 'blue' }}>
					<IoIosArrowRoundForward />
				</div>
			</div>
		</div>
	);
}
