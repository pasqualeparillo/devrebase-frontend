import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Links() {
	const [active, setActive] = useState(false);
	return (
		<div className="flex items-center">
			<p
				className="mx-6 font-semibold relative h-full cursor-pointer"
				onMouseEnter={() => setActive(true)}
				onMouseLeave={() => setActive(false)}
			>
				Jobs
				<motion.span
					className="absolute w-full h-1 bg-black left-0 "
					style={{ bottom: '0' }}
					animate={active ? { y: 5, opacity: 1 } : { y: 20, opacity: 0 }}
					initial={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.4 }}
				/>
			</p>
			<p
				className="mx-6 font-semibold relative"
				onMouseEnter={() => setActive(true)}
				onMouseLeave={() => setActive(false)}
			>
				Companies
				<motion.span
					className="absolute w-full h-1 bg-black left-0 "
					style={{ bottom: '0' }}
					animate={active ? { y: 5, opacity: 1 } : { y: 20, opacity: 0 }}
					initial={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.4 }}
				/>
			</p>
		</div>
	);
}
