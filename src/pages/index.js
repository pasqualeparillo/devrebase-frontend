import React from 'react';
import JumboSection from '../index/indexJumbo/jumboSection';
import AdSection from '../index/indexAd/adSection';
import CardSection from '../index/indexCard/cardSection';
import '../index/index.css';
import IndexJobType from '../index/indexJobType/indexJobType';

export default function IndexPage() {
	return (
		<div className="flex flex-col min-h-screen overflow-x-hidden relative">
			<JumboSection />
			<IndexJobType />
			<CardSection />
			<AdSection />
		</div>
	);
}
