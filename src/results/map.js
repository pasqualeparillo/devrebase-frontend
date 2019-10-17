import React, { useContext } from 'react';
import Card from './card';
import { ResultsContext } from '../store/results';
import useFetch from './fetch';
export default function Map({ history }) {
	const { results, loading } = useContext(ResultsContext);
	if (history.location.pathname === '/') {
		useFetch();
	}
	return (
		<div className="flex flex-wrap -ml-2 ">
			{loading && (
				<React.Fragment>
					<div>Loading...</div> {console.log(results)}
				</React.Fragment>
			)}
			{results && results.map((data, id) => <Card key={id} title={data.title} id={data.id} body={data.body} />)}
		</div>
	);
}
