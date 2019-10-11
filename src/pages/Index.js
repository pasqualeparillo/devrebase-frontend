import React from "react";
import Search from "../search";
import Results from "../results/index";
import Map from "../results/map";

export default function IndexPage() {
  return (
    <div>
      <Search />
      <Results />
      <Map />
    </div>
  );
}
