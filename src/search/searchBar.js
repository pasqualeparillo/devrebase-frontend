import React, { useContext } from 'react';
import { SearchContext } from '../store/search';
import { withRouter } from 'react-router-dom';
import useForm from 'react-hook-form';
import { motion } from 'framer-motion';
import { JOB_SEARCH_URL } from '../constants';
const SearchBar = React.memo(function SearchBar({ history, styles }) {
	const { register, handleSubmit } = useForm();
	const { setSearch } = useContext(SearchContext);
	function onSubmit(value) {
		setSearch(JOB_SEARCH_URL + value.jobDescription);
		history.push('/results');
	}

	return (
		<form className={styles + ' flex bg-white relative border border-black z-50'} onSubmit={handleSubmit(onSubmit)}>
			<input
				className="w-1/3 flex-grow bg-transparent px-8 py-6 lg:text-left text-center border-r border-black tracking-wider text-gray-400 lg:text-xl text-xs rounded-none"
				type="text"
				placeholder="Job title or keywords"
				name="jobDescription"
				ref={register}
			/>
			<input
				className="w-1/3 flex-grow bg-transparent px-8 py-6 lg:text-left text-center tracking-wider text-gray-400 lg:text-xl text-xs rounded-none"
				type="text"
				placeholder="Location"
				name="areaCode"
				ref={register}
			/>

			<motion.button
				className="flex self-center items-center lg:h-16 text-white lg:px-12 px-4 py-4 mr-1 bg-yellow-400 right-0 tracking-wider lg:text-2xl text-xs"
				whileHover={{ backgroundColor: 'rgb(248, 114, 0)' }}
				style={{ backgroundColor: 'rgb(255, 132, 115)' }}
				whileTap={{ scale: 1.05 }}
			>
				<p>Search</p>
			</motion.button>
		</form>
	);
});
export default withRouter(SearchBar);
