import { useState, useEffect, useContext } from 'react';
import { SearchContext } from '../store/search';
import Axios from 'axios';
import { ResultsContext } from '../store/results';

const useFilter = () => {
	const [active, setIsActive] = useState(false);
	const { setResults, results, error, setError, loading, setLoading } = useContext(ResultsContext);
	const { search } = useContext(SearchContext);
	useEffect(
		() => {
			function setFilter() {
				if (active && search) {
					setLoading(true);
					setIsActive(false);
					Axios.get(search).then(response => setResults(response.data.results));
					setLoading(false);
				} else {
					setLoading(true);
					setIsActive(true);
					Axios.get(search + '+' + text).then(response => setResults(response.data.results));
					setLoading(false);
				}
			}
			setFilter();
		},
		[active]
	);
	return { active, setIsActive };
};

export default useFilter;
