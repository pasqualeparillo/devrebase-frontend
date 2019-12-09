import React from 'react';
import { motion } from 'framer-motion';
export default function Logo({ scrolled }) {
	return (
		<div className="flex flex lg:px-12 px-4">
			<div className="items-center justify-center">
				<motion.p
					className="text-4xl font-semibold tracking-wide"
					animate={scrolled ? { color: 'rgb(255, 132, 115)' } : { color: 'rgb(0,0,0)' }}
				>
					hub
				</motion.p>
			</div>
		</div>
	);
}
