import React, { useRef, useEffect, useState } from 'react';
import useForm from 'react-hook-form';
export default function SearchBar() {
	const submitRef = useRef();
	const [margin, setMargin] = useState();
	useEffect(() => {
		(function setmargin() {
			setMargin(submitRef.current.getBoundingClientRect().width);
			window.addEventListener('resize', setmargin);
			return () => window.removeEventListener('resize', setmargin);
		})();
	}, []);
	const { register, handleSubmit } = useForm();
	function onSubmit(values) {
		console.log(values);
	}
	return (
		<form className="flex w-5/6 bg-white  border-2 border-black relative" onSubmit={handleSubmit(onSubmit)}>
			<input
				className="lg:w-3/4 w-1/2 bg-transparent lg:p-8 pt-6 pb-6 font-black lg:text-lg text-xs lg:text-left text-center border-r-2 border-black rounded-none "
				type="text"
				placeholder="Job Description"
				name="jobDescription"
				ref={register}
			/>
			<input
				className="lg:w-1/4 w-1/3 lg:p-8 pt-6 pb-6 bg-transparent font-black lg:text-lg text-xs lg:text-left text-center rounded-none"
				type="text"
				placeholder="Location"
				style={{ marginRight: `${margin}px` }}
				name="areaCode"
				ref={register}
			/>
			<button
				ref={submitRef}
				className="absolute text-white lg:pl-8 lg:pr-8 pl-4 pr-4 pt-1 pb-1 bg-black font-black lg:text-lg text-xs right-0 top-0 bottom-0"
			>
				<p>Submit</p>
			</button>
		</form>
	);
}
