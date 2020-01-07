import React from 'react';
import { motion } from 'framer-motion';
export default function Logo() {
	return (
		<div className="flex h-full">
			<div className="items-center justify-center flex h-full">
				<motion.div
					className="lg:flex md:flex hidden  bg-black h-10 w-10 relative rounded-lg mr-2 flex p-2 justify-between"
					whileHover={{ backgroundColor: 'rgb(255, 132, 115)' }}
					transition={{ duration: 0.2 }}
				>
					<span className="h-4 w-px p-px bg-white self-center" />
					<span className="h-full w-px p-px bg-white" />
					<span className="h-full w-px p-px bg-white" />
					<span className="h-4 w-px p-px bg-white self-center" />
				</motion.div>
				<motion.p className="lg:text-4xl md:text-4xl text-2xl font-semibold tracking-wide">hub</motion.p>
			</div>
		</div>
	);
}
