import React from 'react';
import IndexJumbo from '../index/indexJumbo/indexJumbo';
import IndexAd from '../index/indexAd/indexAd';
import IndexCompany from '../index/indexCompany/indexCompany';
import IndexJoin from '../index/indexJoin/IndexJoin';
import '../index/index.css';

export default function IndexPage() {
	return (
		<div className="flex flex-col min-h-screen overflow-x-hidden relative">
			<IndexJumbo />
			<IndexAd />
			<IndexCompany />
			<IndexJoin />
		</div>
	);
}
