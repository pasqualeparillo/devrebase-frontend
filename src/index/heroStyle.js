import React, { useState, useEffect } from 'react';
import './heroStyle.css';
import MediaQuery from 'react-responsive';

export default function HeroStyle() {
	const [arr, setArr] = useState([]);
	useEffect(() => {
		(function generateArr() {
			for (let i = 0; i < 50; i++) {
				setArr(prevState => [...prevState, i]);
			}
		})();
	}, []);

	return (
		<React.Fragment>
			<MediaQuery minWidth={992}>
				<div
					className="absolute w-screen bg-white overflow-hidden border-b border-gray-300 h-screen -mt-48 shadow-xl"
					style={{ opacity: '.6', transform: 'skewY(-12deg)' }}
				>
					<div className="flex flex-wrap justify-between absolute">
						{arr.map(id => (
							<span
								style={{
									transform: 'skewY(12deg)',
									height: '10vw',
									width: '10vw'
								}}
								className="border-px border-gray-300 style-card"
								key={id}
							/>
						))}
					</div>
				</div>
			</MediaQuery>
			<MediaQuery maxWidth={992}>
				<div
					className="absolute w-screen bg-white overflow-hidden border-b border-gray-300 -mt-24 shadow-xl"
					style={{ opacity: '.6', transform: 'skewY(-12deg)', height: '60vh' }}
				>
					<div className="flex flex-wrap justify-between absolute">
						{arr.map(id => (
							<span
								style={{
									transform: 'skewY(12deg)',
									height: '20vw',
									width: '20vw'
								}}
								className="border-px border-gray-300 style-card"
								key={id}
							/>
						))}
					</div>
				</div>
			</MediaQuery>
		</React.Fragment>
	);
}
