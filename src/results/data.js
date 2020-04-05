import React, { useContext } from "react";
import Card from "./card";
import { ResultsContext } from "../store/results";
import useFetch from "../hooks/fetch";
export default function Data() {
  const { results, loading, open, setOpen, setData } = useContext(
    ResultsContext
  );
  function handleOnClick(data) {
    setOpen(!open);
    setData(data);
  }
  useFetch("http://127.0.0.1:8000/");

  return (
    <div className="flex flex-wrap w-full justify-center">
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
            id={data.id}
            url={data.job_url}
            title={data.job_title}
            company={data.job_company}
            location={data.job_location}
            source={data.job_source}
            body={data.job_body}
          />
        ))
      )}
    </div>
  );
}
