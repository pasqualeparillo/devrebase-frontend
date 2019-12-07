import { useEffect, useContext } from "react";
import { PositionContext } from "../store/position";
import axios from "axios";

const useFetch = () => {
  const { setPosition, position } = useContext(PositionContext);
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
  return { position };
};

export default useFetch;
