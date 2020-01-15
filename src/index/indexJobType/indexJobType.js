import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowForward, IoIosArrowRoundForward } from 'react-icons/io';

export default function IndexJobType() {
	const [cardWidth, setCardWith] = useState(0);
	const [transValue, setTransValue] = useState(0);
	const [currIndex, setCurrIndex] = useState(0);
	const cardRef = useRef(null);
	useEffect(() => {
		setCardWith(cardRef.current.getBoundingClientRect().width);
	}, []);
	let width = 4.4;
	function nextSlide() {
		if (currIndex === 3) {
			setCurrIndex(0);
			setTransValue(0);
		}
		if (currIndex < 3) {
			setCurrIndex(currIndex + 1);
		}
		if (currIndex > 3) {
			setCurrIndex(0);
		}
		setTransValue(cardWidth / 2.5 * currIndex);
	}
	return (
		<div
			className="lg:w-8/9 md:w-8/9 w-full flex lg:flex-row flex-col self-center rounded relative mb-24 pt-12 pb-12 rounded lg:px-12 md: px-8 px-4"
			style={{ backgroundColor: '#f7f7f7' }}
			ref={cardRef}
		>
			<div className="lg:w-1/4 pr-4 lg:m-0 mt-8 mb-8">
				<div className="pb-2">
					<p className="lg:text-3xl md:text-3xl text-2xl font-semibold heading">
						Solutions designed for all your needs
					</p>
				</div>
				<div className="py-2">
					<p className="leading-loose lg:text-base md:text-base text-sm subtext">
						Workspace is our craft. From private offices to whole headquarters, we create spaces that work
						for you.
					</p>
				</div>
				<div className="py-2 w-full flex items-center hover:underline ">
					<a className="text-base subtext" href="/jobs" style={{ color: 'blue' }}>
						View all solutions
					</a>
					<div className="text-xl px-2" style={{ color: 'blue' }}>
						<IoIosArrowRoundForward />
					</div>
				</div>
			</div>
			<div className="inline-block whitespace-no-wrap flex lg:w-5/6 overflow-hidden">
				<motion.div
					className="inline-flex items-center"
					drag="x"
					dragConstraints={{
						left: -cardWidth,
						right: 0
					}}
					dragMomentum={false}
				>
					{[0, 1, 2, 3, 4, 5, 6, 7].map(id => (
						<motion.div className="lg:h-full h-32 mx-2" key={id}>
							<motion.div
								style={{ width: `calc(${cardWidth}px / ${width})` }}
								className="flex-grow bg-white rounded border hover:shadow cursor-pointer flex items-center justify-center h-full"
								key={id}
								animate={{ x: -transValue }}
								transition={{ type: 'spring', stiffness: 300, damping: 200 }}
							>
								<p className="heading" key={id}>
									test
								</p>
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</div>
			<motion.button
				whileHover={{ backgroundColor: '#f9ed69', color: '#000000' }}
				transition={{ duration: 0.2 }}
				className="absolute h-16 w-16 rounded-full shadow-2xl lg:flex md:flex hidden justify-center text-3xl "
				style={{
					right: '-2rem',
					transform: 'translateY(50%)',
					top: 'calc(50% - 4rem)',
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
