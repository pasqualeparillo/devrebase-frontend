import React from 'react';
import Filter from './filter';
import { Categories } from './categories';
export default function Index() {
	return (
		<div className="flex flex-wrap justify-center w-full mb-10 mt-10">
			<div className="lg:w-5/6 w-11/12 flex flex-col">
				<div className="flex flex-wrap text-left ">
					<p className="text-3xl font-black mb-10">Filter</p>
				</div>
			</div>
			<div className="flex lg:w-5/6 w-11/12 justify-around flex-wrap">
				{Categories.map(item => {
					return <Filter key={item.id} title={item.title} content={item.content} />;
				})}
			</div>
		</div>
	);
}
