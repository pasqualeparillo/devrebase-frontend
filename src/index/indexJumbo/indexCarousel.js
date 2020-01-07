import React from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowForward } from 'react-icons/io';
import bgImage from '../../images/workingOne.jpg';

export default function IndexCarousel() {
	return (
		<div className="lg:absolute relative w-full h-full bg-white z-40 right-0 flex lg:flex-row flex-col justify-end lg:mt-0 md:mt-0 mt-32">
			<p className="lg:hidden md:hidden block text-3xl font-semibold py-6">Revolutionize your workspace</p>
			<div className="lg:w-5/6 w-full h-full bg-gray-500 rounded">
				<img src={bgImage} className="bg-cover w-full h-full rounded" alt="working" />
			</div>
			<motion.button
				whileHover={{ backgroundColor: '#f9ed69', color: '#000000' }}
				transition={{ duration: 0.2 }}
				className="absolute h-16 w-16 rounded-full shadow-2xl lg:flex md:flex hidden justify-center text-3xl "
				style={{
					right: '-2rem',
					transform: 'translateY(50%)',
					top: 'calc(50% - 5rem)',
					color: '#000000',
					backgroundColor: '#ffd460'
				}}
			>
				<IoIosArrowForward />
			</motion.button>
		</div>
	);
}
