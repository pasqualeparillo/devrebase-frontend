import React from "react";
import SearchBar from "./searchBar";
import SearchFilter from "./searchFilter";

export default function Search() {
  return (
    <div className="flex flex-wrap justify-center w-full mt-20">
      <SearchBar />
      <SearchFilter />
    </div>
  );
}
