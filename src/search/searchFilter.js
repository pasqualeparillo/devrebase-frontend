import React from 'react';
import { BasicButton } from '../components/button';
export default function SearchFilter() {
	return (
		<div className="w-5/6 flex mt-4 relative">
			<div className="w-full flex items-center relative flex-shrink">
				<BasicButton opposite={false} text={'Home'} />
				<BasicButton opposite={false} text={'Jobs'} />
				<BasicButton opposite={false} text={'Companies'} />
				<BasicButton opposite={false} text={'Trending'} />
			</div>
		</div>
	);
}
