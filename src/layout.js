import React from 'react';
import Header from './navbar/index';
import Footer from './footer/footer';

export default function Layout({ children }) {
	return (
		<div className="relative flex flex-col">
			<Header />
			{children}
			<Footer />
		</div>
	);
}
