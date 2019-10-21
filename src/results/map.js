import React, { useContext } from "react";
import Card from "./card";
import { ResultsContext } from "../store/results";
import useFetch from "../hooks/fetch";
const Map = React.memo(function Map({ history }) {
  const { results, loading } = useContext(ResultsContext);
  function handleOnClick(data) {
    console.log(data);
  }
  useFetch();
  return (
    <div className="flex flex-wrap -ml-2 ">
      {loading ? (
        <React.Fragment>
          <div>Loading...</div> {console.log(results)}
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
