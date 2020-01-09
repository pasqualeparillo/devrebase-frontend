import React from 'react';
import { motion } from 'framer-motion';

export default function IndexAd() {
	return (
		<div
			className="lg:w-8/9 md:w-8/9 w-full flex lg:flex-row flex-col flex-wrap self-end justify-between lg:flex-no-wrap flex-wrap lg:p-12 p-6 relative bg-black mb-24 mt-24"
			style={{ maxWidth: '1440px' }}
		>
			<div className="flex flex-col lg:w-1/2 w-full h-full justify-between lg:items-center lg:p-16">
				<p className="text-white font-black lg:text-6xl text-3xl">What is Devrebase? </p>
			</div>
			<div className="flex flex-col lg:w-1/2 w-full h-full items-start lg:py-16 py-10 lg:pr-16">
				<div className="w-full flex items-center content-center">
					<motion.button
						className="rounded-full font-semibold text-lg px-8 py-4"
						style={{ backgroundColor: '#ffd460' }}
						whileHover={{ backgroundColor: '#f9ed69' }}
					>
						Know More
					</motion.button>
				</div>
				<div className="lg:w-2/3 w-full flex items-center content-center">
					<p className="font-base text-sm leading-loose text-gray-300 mt-8">
						Interact with your users on the platforms they prefer. Web and mobile - we have you covered.
					</p>
				</div>
				<div className="w-full flex flex-col items-center content-center">
					<div className="w-full flex mt-12 mb-12">
						<p className="text-white font-semibold">Why Devrebase?</p>
					</div>
					<div className="w-full flex flex-wrap">
						<div className="lg:w-1/2 w-full flex flex-col">
							<div className="w-full py-4 flex items-center relative">
								<div className="bg-yellow-400 rounded-full w-2 h-2 mr-4" />
								<p className="text-gray-300 text-sm">UI/UX Design</p>
							</div>
							<div className="w-full py-4 flex items-center relative">
								<div className="bg-yellow-400 rounded-full w-2 h-2 mr-4" />
								<p className="text-gray-300 text-sm">Mobile App Design</p>
							</div>
							<div className="w-full py-4 flex items-center relative">
								<div className="bg-yellow-400 rounded-full w-2 h-2 mr-4" />
								<p className="text-gray-300 text-sm">Content Strategy</p>
							</div>
							<div className="w-full py-4 flex items-center relative">
								<div className="bg-yellow-400 rounded-full w-2 h-2 mr-4" />
								<p className="text-gray-300 text-sm">Front-End Development</p>
							</div>
						</div>
						<div className="lg:w-1/2 w-full flex flex-col">
							<div className="w-full py-4 flex items-center relative">
								<div className="bg-yellow-400 rounded-full w-2 h-2 mr-4" />
								<p className="text-gray-300 text-sm">Prototyping & Interactions</p>
							</div>
							<div className="w-full py-4 flex items-center relative">
								<div className="bg-yellow-400 rounded-full w-2 h-2 mr-4" />
								<p className="text-gray-300 text-sm">Competitive Analysis</p>
							</div>
							<div className="w-full py-4 flex items-center relative">
								<div className="bg-yellow-400 rounded-full w-2 h-2 mr-4" />
								<p className="text-gray-300 text-sm">Motion Graphics</p>
							</div>
							<div className="w-full py-4 flex items-center relative">
								<div className="bg-yellow-400 rounded-full w-2 h-2 mr-4" />
								<p className="text-gray-300 text-sm">Product Management</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
