import React from "react";
import Results from "../results/index";
import SearchBar from "../search/searchBar";
import { MobileFilter } from "../results/filter";

export default function IndexPage() {
  return (
    <div className="relative w-full mx-auto">
      <div className="w-full flex mx-auto bg-white flex justify-center border-b border-t border-gray-200 sticky top-0 left-0 right-0 bottom-0 z-50 h-16">
        <div className="w-full flex justify-end">
          <SearchBar />
        </div>
        <MobileFilter />
      </div>
      <Results />
    </div>
  );
}
