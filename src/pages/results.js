import React from "react";
import Search from "../search";
import Results from "../results/index";

export default function IndexPage() {
  return (
    <div className="relative w-full mx-auto -mt-32">
      <div className="pt-32 pb-32 w-full flex mx-auto bg-teal-100 flex justify-center">
        <div className="w-5/6 ">
          <Search />
        </div>
      </div>

      <Results />
    </div>
  );
}
