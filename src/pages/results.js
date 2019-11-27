import React from "react";
import Results from "../results/index";
import SearchBar from "../search/searchBar";

export default function IndexPage() {
  return (
    <div className="relative w-full mx-auto -mt-32">
      <div className="pt-16 pb-16 w-full flex mx-auto bg-white flex justify-center border-b border-gray-200">
        <div className="w-5/6  mt-20">
          <SearchBar styles={"w-full p-4 shadow"} />
        </div>
      </div>
      <Results />
    </div>
  );
}
