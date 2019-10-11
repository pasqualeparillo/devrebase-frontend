import React from "react";

export default function SearchBar() {
  return (
    <form className="flex w-5/6 bg-white  border-2 border-black relative">
      <input
        className="lg:w-3/4 w-1/2 bg-transparent lg:p-8 pt-6 pb-6 font-black lg:text-lg text-xs lg:text-left text-center border-r-2 border-black"
        type="text"
        placeholder="Job Description"
      />
      <input
        className="lg:w-1/4 w-1/2 lg:p-8 pt-6 pb-6 bg-transparent font-black lg:text-lg text-xs lg:mr-40 mr-16 lg:text-left text-center"
        type="text"
        placeholder="Location"
      />
      <button className="absolute text-white lg:pl-8 lg:pr-8 pl-2 pr-2 pt-1 pb-1 bg-black font-black lg:text-lg text-xs right-0 top-0 bottom-0">
        Submit
      </button>
    </form>
  );
}
