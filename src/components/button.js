import React from 'react';
import { motion } from 'framer-motion';

const variant = {
	active: {
		x: -5,
		y: 5
	},
	inactive: {
		x: 0,
		y: 0
	}
};
export function BasicButton({ text, opposite }) {
	return (
		<div
			className={
				opposite === true
					? 'relative button ml-2 bg-white border-2 border-black font-black hover:text-white hover:bg-black flex flex-grow'
					: 'relative button ml-2 bg-black border-2 border-black font-black hover:text-black hover:bg-black flex flex-grow'
			}
		>
			<motion.button
				variants={variant}
				initial={'inactive'}
				whileHover={'active'}
				className={
					opposite === true
						? 'w-full h-full button text-black lg:pl-8 lg:pr-8 md:pl-4 md:pr-4 pl-1 pr-1 pt-2 pb-2 bg-white font-black hover:text-white hover:bg-black lg:text-base text-xs border-2 border-white'
						: 'w-full h-full button text-white lg:pl-8 lg:pr-8 md:pl-4 md:pr-4 pl-1 pr-1 pt-2 pb-2 bg-black border-2 border-black font-black hover:text-black hover:bg-white lg:text-base text-xs'
				}
			>
				{text}
			</motion.button>
		</div>
	);
}
