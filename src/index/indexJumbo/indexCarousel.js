import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowForward } from 'react-icons/io';

export default function IndexCarousel() {
	const [slideWidth, setSlideWidth] = useState(0);
	const [transValue, setTransValue] = useState(0);
	const [currIndex, setCurrIndex] = useState(0);
	const slideRef = useRef(null);
	useEffect(() => {
		setSlideWidth(slideRef.current.getBoundingClientRect().width);
	}, []);
	const urls = [
		'https://images.unsplash.com/photo-1558980394-34764db076b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
		'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
		'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
	];
	function nextSlide() {
		if (currIndex === urls.length - 1) {
			setCurrIndex(0);
			setTransValue(0);
		}
		if (currIndex < urls.length - 1) {
			setCurrIndex(currIndex + 1);
		}
		if (currIndex > urls.length - 1) {
			setCurrIndex(0);
		}
		setTransValue(slideWidth * currIndex);
	}

	return (
		<div className="lg:absolute relative w-full h-full bg-white z-40 right-0 flex lg:flex-row flex-col justify-end ">
			<p className="lg:hidden md:hidden block text-3xl font-semibold py-6 heading">
				Revolutionize your workspace
			</p>
			<div className="lg:w-5/6 w-full rounded overflow-hidden">
				<div className="inline-flex whitespace-no-wrap h-full">
					<motion.div
						className="w-11/12 rounded relative flex inline-block h-full"
						animate={{ x: -transValue }}
						transition={{ type: 'spring', stiffness: 300, damping: 200 }}
						drag="x"
						dragConstraints={{
							left: -slideWidth * (urls.length - 1),
							right: 0
						}}
						dragMomentum={false}
					>
						{urls.map(id => (
							<motion.div
								style={{ width: '1056px', marginRight: '12px' }}
								ref={slideRef}
								className="whitespace-normal w-full h-full flex-shrink-0 rounded overflow-hidden"
								key={id}
							>
								<motion.div
									className="h-full relative overflow-hidden rounded bg-gray-300 w-full block"
									style={{ paddingBottom: 'calc(100% / (16 / 9)' }}
									key={id}
								>
									<motion.img
										style={{ userSelect: 'none', userDrag: 'none' }}
										src={id}
										key={id}
										className="bg-cover rounded absolute h-full w-full left-0 right-0 bottom-0 top-0 "
										alt="working"
									/>
								</motion.div>
							</motion.div>
						))}
					</motion.div>
				</div>
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
				onClick={() => nextSlide()}
			>
				<IoIosArrowForward />
			</motion.button>
		</div>
	);
}
