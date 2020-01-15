import React, { useState } from 'react';
import '../index.css';
export default function IndexAdCard({ i }) {
	const [isHovered, setIsHovered] = useState(false);
	const urls = [
		'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
		'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
		'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
	];
	return (
		<div
			className="ad-card rounded flex flex-col relative cursor-pointer flex-grow"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div
				className="w-full relative whitespace-normal overflow-hidden bg-gray-400 rounded-t"
				style={{ paddingBottom: 'calc(100% / (16 / 9))' }}
			>
				<img className="w-full absolute h-auto" src={urls[i]} alt="placeholder" />
			</div>
			<div className="w-full flex flex-col border-r border-l border-b rounded-b bg-white">
				<div className="lg:pt-6 md:pt-6 pt-4 px-4">
					<p
						className={isHovered ? `text-xl underline heading` : `text-xl heading`}
						style={{ color: 'blue' }}
					>
						Fully custom spaces
					</p>
				</div>
				<div className="lg:pt-2 lg:pb-6 md:pb-6 pb-4 px-4 flex">
					<p className="lg:text-base md:text-base text-sm leading-loose subtext">Whole buildings to full.</p>
				</div>
			</div>
		</div>
	);
}
