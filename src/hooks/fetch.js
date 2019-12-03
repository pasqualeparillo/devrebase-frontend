import { useEffect, useContext } from "react";
import { ResultsContext } from "../store/results";
import { SearchContext } from "../store/search";
import axios from "axios";

const useFetch = () => {
  const { setResults, results, loading, setLoading } = useContext(
    ResultsContext
  );
  const { search } = useContext(SearchContext);
  useEffect(() => {
    const fetchData = async function() {
      try {
        setLoading(true);
        const response = await axios.get(search);
        if (response.status === 200) {
          setResults(response.data.results);
        }
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [search]);
  return { loading, results };
};

export default useFetch;
