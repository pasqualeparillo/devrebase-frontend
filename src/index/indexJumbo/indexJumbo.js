import React from 'react';
import IndexSearch from './indexSearch';
import IndexCarousel from './indexCarousel';

export default function IndexJumbo() {
	return (
		<div className="w-8/9 relative flex mx-auto mb-24" style={{ height: '80vh' }}>
			<IndexCarousel />
			<IndexSearch />
		</div>
	);
}
