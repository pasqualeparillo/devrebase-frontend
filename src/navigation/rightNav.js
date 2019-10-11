import React from 'react';
import { BasicButton } from '../components/button';

export default function RightNav() {
	return (
		<div className="flex ">
			<BasicButton opposite={false} text={'Login'} />
			<BasicButton opposite={true} text={'Register'} />
		</div>
	);
}
