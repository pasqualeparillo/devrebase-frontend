import React from 'react';
import { motion } from 'framer-motion';
import { TiBookmark } from 'react-icons/ti';

export default function Card({ title, id, body, handleOnClick, data }) {
	return (
		<motion.div
			className="w-11/12 flex py-4 rounded-sm border-b cursor-pointer"
			onClick={() => handleOnClick(data)}
		>
			<div className="flex items-center px-4">
				<div className="h-20 w-20 rounded-full bg-black" />
			</div>
			<div className="flex flex-wrap  flex-1">
				<div className="w-full">
					<p className="text-xl font-medium w-3/4 break-all">{title}</p>
				</div>
				<div className="w-full flex items-center ">
					<p className="text-gray-500 text-sm">Spotify</p>
					<div className="h-1 w-1 bg-gray-500 rounded-full mx-4" />
					<p className="text-gray-500 text-sm">{id} day ago</p>
				</div>
			</div>
			<div className="flex flex-wrap justify-center flex-1">
				<div className="w-full flex items-end">
					<p className="font-semibold text-sm">Full-Time</p>
				</div>
				<div className="w-full flex items-start">
					<p className="text-gray-500 text-sm">Stockholm, Sweden</p>
				</div>
			</div>
			<div className="flex items-center w-1/6 flex-1 justify-end">
				<div className="w-1/6 flex justify-end">
					<motion.div className="text-gray-500" whileHover={{ color: '#63b3ed' }}>
						<TiBookmark className="h-8 w-8" />
					</motion.div>
				</div>
				<div className="w-1/6 flex flex-wrap justify-end">
					<div className="w-full my-1 flex justify-end">
						<div className="h-1 w-1 bg-gray-500 rounded-full" />
					</div>
					<div className="w-full my-1 flex justify-end">
						<div className="h-1 w-1 bg-gray-500 rounded-full" />
					</div>
					<div className="w-full my-1 flex justify-end">
						<div className="h-1 w-1 bg-gray-500 rounded-full" />
					</div>
				</div>
			</div>
		</motion.div>
	);
}
