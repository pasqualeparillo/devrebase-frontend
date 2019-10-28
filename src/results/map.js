import React, { useContext } from 'react';
import Card from './card';
import { ResultsContext } from '../store/results';
import useFetch from '../hooks/fetch';
import useInfiniteScroll from '../hooks/infiniteScroll';
import { SearchContext } from '../store/search';
const Map = React.memo(function Map() {
	const { results, loading, open, setOpen, setData } = useContext(ResultsContext);
	const { setSearch } = useContext(SearchContext);
	function handleOnClick(data) {
		setOpen(!open);
		setData(data);
		console.log(open + 'open left data right ' + data.title);
	}
	const { bottom } = useInfiniteScroll(fetchMore);
	useFetch(bottom);
	function fetchMore() {
		setSearch('https://jsonplaceholder.typicode.com/todos');
	}
	return (
		<div className="flex flex-wrap -ml-2 ">
			{loading ? (
				<React.Fragment>
					<div className="w-5/6">
						<p className="text-3xl font-black ml-2">Loading...</p>
					</div>
				</React.Fragment>
			) : (
				results.map((data, id) => (
					<Card
						handleOnClick={() => handleOnClick(data)}
						key={id}
						title={data.title}
						id={data.id}
						body={data.body}
					/>
				))
			)}
		</div>
	);
});
export default Map;
