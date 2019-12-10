import React from "react";
import Results from "../results/index";
import SearchBar from "../search/searchBar";
import { MobileFilter } from "../results/filter";

export default function IndexPage() {
  return (
    <div className="relative w-full mx-auto">
      <div className="pt-16 pb-16 w-full flex mx-auto bg-white flex justify-center border-b border-gray-200">
        <div className="w-full flex justify-center mt-32">
          <SearchBar styles={"lg:w-4/5 w-11.5/12 lg:p-4 p-1 shadow"} />
        </div>
        <MobileFilter />
      </div>
      <Results />
    </div>
  );
}
