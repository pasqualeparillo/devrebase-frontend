import React from 'react';
import Logo from './Logo';
import Links from './links';

export default function Header() {
	return (
		<div className="w-full h-20 p-4 flex justify-center z-50 relative bg-white">
			<div className="w-11/12 flex items-center relative overflow-hidden">
				<Logo />
				<Links />
			</div>
		</div>
	);
}
