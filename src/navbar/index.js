import React from 'react';
import Logo from './Logo';
import Links from './links';

export default function Header() {
	return (
		<div className="w-full py-3 flex items-center relative overflow-hidden bg-white">
			<div className="flex w-3/4 justify-between mx-auto">
				<Logo />
				<Links />
			</div>
		</div>
	);
}
