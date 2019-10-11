import React from "react";
import Header from "./header";
import Map from "./map";

export default function Results() {
  return (
    <div className="flex flex-wrap justify-center w-full">
      <div className="w-5/6 flex flex-col justify-between flex-wrap">
        <Header />
        <Map />
      </div>
    </div>
  );
}
