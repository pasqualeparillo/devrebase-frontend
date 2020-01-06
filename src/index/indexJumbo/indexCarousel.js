import React from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowForward } from 'react-icons/io';
import bgImage from '../../images/workingOne.jpg';

export default function IndexCarousel() {
	return (
		<div className="absolute w-full h-full bg-white z-40 right-0 flex justify-end">
			<div className="w-5/6 h-full ">
				<img src={bgImage} className="bg-cover w-full h-full rounded" alt="working" />
			</div>
			<motion.button
				whileHover={{ backgroundColor: 'rgb(255, 132, 115)' }}
				transition={{ duration: 0.2 }}
				className="absolute bg-white h-16 w-16 rounded-full shadow-2xl flex justify-center text-3xl"
				style={{
					right: '-2rem',
					transform: 'translateY(50%)',
					top: 'calc(50% - 5rem)'
				}}
			>
				<IoIosArrowForward />
			</motion.button>
		</div>
	);
}