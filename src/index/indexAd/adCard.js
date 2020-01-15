import React from 'react';

export default function AdCard({ url }) {
	return (
		<div className="ad-card rounded flex flex-col relative flex-grow">
			<div
				className="w-full relative whitespace-normal overflow-hidden bg-gray-400 rounded"
				style={{ paddingBottom: 'calc(100% / (16 / 9))' }}
			>
				<img className="w-full absolute h-auto" src={url} alt="placeholder" />
			</div>
			<div className="w-full flex flex-col bg-white">
				<div className="lg:pt-6 md:pt-6 pt-4">
					<p className="text-xl font-semibold heading">Fully custom spaces</p>
				</div>
				<div className="lg:pt-2 lg:pb-6 md:pb-6 pb-4 flex">
					<p className="text-base subtext leading-relaxed tracking-wide pt-3">
						Expand in key markets around the world while attracting top talent when you join our network of
						500+ locations in over 100 cities.
					</p>
				</div>
			</div>
		</div>
	);
}
