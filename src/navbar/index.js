import React from 'react';
import Logo from './Logo';
import Links from './links';

export default function Header() {
	return (
		<div
			className="w-full h-20 p-4 flex items-center fixed overflow-hidden border-b border-tan-400 bg-white"
			style={{ zIndex: 9999 }}
		>
			<Logo />
			<Links />
		</div>
	);
}
