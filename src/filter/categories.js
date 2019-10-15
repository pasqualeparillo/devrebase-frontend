import React, { useState } from 'react';
import { motion } from 'framer-motion';
export default function Categories({ type, hoverColor }) {
	const [hover, setHover] = useState(false);
	const variant = {
		active: {
			backgroundColor: hoverColor,
			transition: {
				duration: 0.2
			}
		},
		inactive: {
			backgroundColor: '#FFFFFF',
			transition: {
				duration: 0.2
			}
		}
	};
	return (
		<div
			className="category-card relative flex flex-wrap w-1/5 flex-grow mr-2 ml-2 cursor-pointer"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<div className="category-card absolute w-full h-full bg-transparent">
				<motion.div
					className="card w-full pt-6 pb-6 pl-4 pr-4 flex flex-grow flex-wrap border-2 border-black card justify-between"
					variants={variant}
					initial={'inactive'}
					whileHover={'active'}
				>
					<div className="flex items-center">
						<motion.span
							className={'h-6 w-6 rounded-full mr-1'}
							animate={hover ? { backgroundColor: '#000000' } : { backgroundColor: `${hoverColor}` }}
							initial={{ backgroundColor: hoverColor }}
							transition={{ duration: 0.2 }}
						/>{' '}
					</div>

					<motion.div className="flex items-center justify-between flex-1">
						<p className="font-black text-xs">1234 Jobs</p>
						<p className="font-black text-base">{type}</p>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
