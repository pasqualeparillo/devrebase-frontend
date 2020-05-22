import React, { useContext } from "react";
import Data from "./data";
import GoogleApiWrapper from "./map";
import { withRouter } from "react-router-dom";
import { Filter } from "./filter";
import { ResultsContext } from "../store/results";

function Results() {
  const { results } = useContext(ResultsContext);
  return (
    <div className="flex flex-wrap w-full relative">
      <div className="absolute top-0 right-0 bottom-0 left-0 w-screen h-screen flex flex-no-wrap">
        <div className="w-1/3 h-full flex bg-transparent absolute z-50">
          <div
            className="w-full m-4 shadow-lg rounded-xl flex flex-col pb-4 pt-4"
            style={{ backgroundColor: "#FAF7F5" }}
          >
            <Filter count={results.count} />
            <Data />
          </div>
        </div>
        <GoogleApiWrapper />
      </div>
    </div>
  );
}
export default withRouter(Results);
