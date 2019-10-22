import React, { useContext } from 'react';
import Card from './card';
import { ResultsContext } from '../store/results';
import useFetch from '../hooks/fetch';
const Map = React.memo(function Map() {
	const { results, loading, open, setOpen, setData } = useContext(ResultsContext);
	function handleOnClick(data) {
		setOpen(!open);
		setData(data);
		console.log(open + 'open left data right ' + data.title);
	}
	useFetch();
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
