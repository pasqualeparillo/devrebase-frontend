import React, { useEffect, useRef, useState } from 'react';
import { useWindowSize } from '../hooks/resize';
import { motion, AnimatePresence } from 'framer-motion';

export default function Filter({ title, content }) {
	const filterRef = useRef();
	const [height] = useWindowSize();
	const [size, setSize] = useState({ height: null, width: null });
	const [isOpen, setIsOpen] = useState(false);
	const parent = {
		closed: {
			backgroundColor: '#ffffff',
			color: '#000000'
		},
		open: {
			backgroundColor: '#000000',
			color: '#ffffff'
		}
	};
	const child = {
		closed: {
			y: `calc(-${size.height}px * ${content.length})`,
			transition: {
				type: 'tween'
			}
		},
		open: {
			y: 0,
			transition: {
				type: 'tween'
			}
		}
	};
	function setOpen() {
		setIsOpen(!isOpen);
	}
	useEffect(
		() => {
			setSize({
				height: filterRef.current.getBoundingClientRect().height,
				width: filterRef.current.getBoundingClientRect().width
			});
		},
		[height]
	);
	return (
		<motion.div
			className="flex flex-grow category-card mr-1 ml-1 border-2 border-black relative z-40 justify-center items-center w-1/5 cursor-pointer "
			ref={filterRef}
			variants={parent}
			animate={isOpen ? 'open' : 'closed'}
			initial="closed"
		>
			<p className="text-xs font-bold w-full h-full text-center pt-4 pb-4" onClick={() => setOpen()}>
				{title}
			</p>
			<AnimatePresence>
				{isOpen ? (
					<ul
						className="absolute flex flex-col justify-center text-center z-50 align-middle overflow-y-hidden"
						style={{ left: '-2px', top: `calc(${size.height}px - 2px)` }}
					>
						{content.map((title, id) => (
							<motion.li
								variants={child}
								exit="closed"
								className="bg-white border-r-2 border-l-2 border-b-2 border-black flex justify-center items-center"
								style={{ height: `${size.height}px`, width: `${size.width}px` }}
								key={id}
							>
								<p className="text-black text-xs " key={id}>
									{title}
								</p>
							</motion.li>
						))}
					</ul>
				) : null}
			</AnimatePresence>
		</motion.div>
	);
}
