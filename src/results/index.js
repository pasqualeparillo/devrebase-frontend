import React from "react";
import Data from "./data";
import GoogleApiWrapper from "./map";
import { withRouter } from "react-router-dom";
import { Filter } from "./filter";

function Results() {
  return (
    <div className="flex flex-wrap w-full relative">
      <Filter />
      <div className="lg:w-2/5 w-full flex flex-col lg:justify-start justify-center flex-wrap">
        <Data />
      </div>
      <div className="w-2/5 flex flex-col justify-start relative">
        <div
          className="sticky top-0 right-0 bottom-0 w-full"
          style={{ height: "calc(100vh - 4rem)", top: "4rem" }}
        >
          <GoogleApiWrapper />
        </div>
      </div>
    </div>
  );
}
export default withRouter(Results);
