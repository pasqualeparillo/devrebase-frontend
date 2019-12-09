import React from 'react';
import HeroStyle from '../index/heroStyle';
import HeroPannel from '../index/heroPannel';
import HeroAside from '../index/heroAside';
import HeroSearch from '../index/heroSearch';
export default function IndexPage() {
	return (
		<div className="flex flex-col min-h-screen overflow-x-hidden" style={{ height: '200vh' }}>
			<div
				className="w-full h-screen relative flex justify-center relative"
				style={{ marginTop: 'calc(6rem - 1px' }}
			>
				<HeroStyle />
				<div className="lg:w-11/12 w-11.5/12 flex mx-auto lg:mt-32 justify-between lg:flex-no-wrap flex-wrap">
					<HeroSearch />
					<HeroPannel />
					<HeroAside />
				</div>
			</div>
			<div className="w-full flex mx-auto lg:mt-32 justify-center p-12 lg:flex-no-wrap flex-wrap h-screen">
				<div className="absolute h-screen w-screen bg-gray-300" style={{ transform: 'skewY(-12px)' }} />
			</div>
		</div>
	);
}
