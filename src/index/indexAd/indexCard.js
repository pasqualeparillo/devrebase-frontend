import React, { useState } from 'react';
import '../index.css';
export default function IndexCard() {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div
			className="ad-card rounded flex flex-col relative cursor-pointer"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="w-full relative" style={{ paddingBottom: 'calc(100% / (16 / 9))' }}>
				<img
					className="h-full w-full absolute rounded-t bg-gray-400"
					src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
					alt="placeholder"
				/>
			</div>
			<div className="w-full flex flex-col border-r border-l border-b rounded-b">
				<div className="lg:py-6 md:py-6 py-4 px-4">
					<p className={isHovered ? `text-xl underline` : `text-xl`} style={{ color: 'blue' }}>
						Fully custom spaces
					</p>
				</div>
				<div className="lg:pt-2 lg:pb-12 md:pb-12 pb-4 px-4">
					<p className="lg:text-base md:text-base text-sm leading-loose">
						Whole buildings to full or partial floors that are tailored to enhance your unique business and
						culture.
					</p>
				</div>
			</div>
		</div>
	);
}
