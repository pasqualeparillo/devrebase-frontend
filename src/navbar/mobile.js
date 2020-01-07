import React, { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
export default function MobileNav() {
	const [isToggled, setIsToggled] = useState(false);
	return (
		<div
			className="flex flex-wrap justify-between items-center text-4xl mr-4"
			onClick={() => setIsToggled(!isToggled)}
		>
			<IoIosMenu />
		</div>
	);
}
