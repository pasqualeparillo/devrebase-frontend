import React, { useState, useEffect } from 'react';
export default function useInfiniteScroll(callback) {
	const [bottom, setIsBottom] = useState(false);
	const debounce = (func, delay) => {
		let inDebounce;
		return function() {
			clearTimeout(inDebounce);
			inDebounce = setTimeout(() => {
				func.apply(this, arguments);
			}, delay);
		};
	};
	useEffect(() => {
		window.addEventListener('scroll', debounce(handleScroll), 500);
		return () => window.removeEventListener('scroll', debounce(handleScroll), 500);
	}, []);
	useEffect(
		() => {
			if (!bottom) return;
			callback();
		},
		[bottom]
	);
	function handleScroll() {
		const scrollPos = window.innerHeight + document.documentElement.scrollTop;
		const docHeight = document.documentElement.offsetHeight;
		if (Math.round(scrollPos) + 1 !== docHeight || bottom) return;
		setIsBottom(true);
	}
	return { bottom };
}
