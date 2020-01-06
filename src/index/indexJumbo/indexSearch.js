import React from 'react';
import { motion } from 'framer-motion';
export default function IndexSearch() {
	return (
		<div
			className="absolute bg-white rounded z-50 left-0 py-4 pr-4 pl-2 mt-0"
			style={{
				width: 'calc(33% - 25px)',
				top: 'calc(50% - 1rem)',
				transform: 'translateY(-50%)'
			}}
		>
			<div className="py-4">
				<p className="text-4xl font-semibold">Revolutionize your workspace</p>
			</div>
			<div className="py-4 ">
				<p className="text-small leading-relaxed">
					Job searching doesn't HAVE to be so hard. One account, one site, all the jobs.
				</p>
			</div>
			<div className="py-4 relative">
				<input
					className="w-full py-4 px-4 border-black border text-small rounded text-black input-text-black"
					placeholder="Job title"
					type="text"
				/>
				<div className="absolute bg-white px-2" style={{ left: '1rem', top: '.5rem' }}>
					<p className="text-xs text-gray-600">find your ideal job</p>
				</div>

				<motion.button
					className="w-full rounded text-white bg-black mt-8 py-4"
					whileHover={{ backgroundColor: 'rgb(255, 132, 115)' }}
					transition={{ duration: 0.2 }}
				>
					Submit
				</motion.button>
			</div>
		</div>
	);
}
