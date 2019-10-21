import React, { useState, useRef, useEffect } from 'react';
import { useWindowSize } from '../hooks/resize';
import Categories from './categories';
export default function Filter() {
	const [height] = useWindowSize();
	const [isOpen, setIsOpen] = useState(false);
	const [size, setSize] = useState({ height: null, width: null });
	const filterRef = useRef();
	useEffect(
		() => {
			setSize({
				height: filterRef.current.getBoundingClientRect().height,
				width: filterRef.current.getBoundingClientRect().width
			});
		},
		[height]
	);

	return (
		<div className="flex flex-wrap justify-center w-full mb-10 mt-10">
			<div className="w-5/6 flex flex-col">
				<div className="flex flex-wrap text-left ">
					<p className="text-3xl font-black mb-10">Filter</p>
				</div>
			</div>
			<div className="flex w-5/6 justify-around flex-wrap">
				<div
					className={
						isOpen
							? `flex flex-grow category-card mr-2 ml-2 border-2 border-black relative z-40 justify-center items-center bg-black text-white`
							: `flex flex-grow category-card mr-2 ml-2 border-2 border-black relative z-40 justify-center items-center`
					}
					ref={filterRef}
					onClick={() => setIsOpen(!isOpen)}
				>
					<p>Filter</p>
					{isOpen ? (
						<ul
							className="absolute flex flex-col w-full justify-center text-center z-50 align-middle"
							style={{ left: '-2px', top: `calc(${size.height}px - 2px)` }}
						>
							<li
								className="bg-white border-r-2 border-l-2 border-black flex justify-center items-center"
								style={{ height: `${size.height}px`, width: `${size.width}px` }}
							>
								<p className="text-black">Filter 1</p>
							</li>
							<li
								className="bg-white border-2 border-black flex justify-center items-center"
								style={{ height: `${size.height}px`, width: `${size.width}px` }}
							>
								<p className="text-black">Filter 2</p>
							</li>
							<li
								className="bg-white border-r-2 border-l-2 border-b-2 border-black flex justify-center items-center"
								style={{ height: `${size.height}px`, width: `${size.width}px` }}
							>
								<p className="text-black">Filter 3</p>
							</li>
						</ul>
					) : null}
				</div>
				<div className="flex flex-grow category-card mr-2 ml-2 border-2 border-black p-6 relative" />
				<div className="flex flex-grow category-card mr-2 ml-2 border-2 border-black p-6 relative" />
				<div className="flex flex-grow category-card mr-2 ml-2 border-2 border-black p-6 relative" />
			</div>
		</div>
	);
}
