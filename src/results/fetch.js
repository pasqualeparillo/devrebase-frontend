import { useEffect, useState } from "react";
import axios from "axios";
export const useFetch = url => {
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        return setResponse(res.data);
      } catch (error) {
        return setError(error);
      }
    };
    fetchData();
  }, [url]);
  return { response, error };
};
