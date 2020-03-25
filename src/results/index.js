import React from "react";
import Map from "./map";
import { withRouter } from "react-router-dom";
import { Filter } from "./filter";
function Results() {
  return (
    <div className="flex flex-wrap justify-center w-full relative">
      <Filter />
      <div className="lg:w-4/6 w-11/12 flex flex-col flex-grow justify-start flex-wrap">
        <Map />
      </div>
    </div>
  );
}
export default withRouter(Results);
