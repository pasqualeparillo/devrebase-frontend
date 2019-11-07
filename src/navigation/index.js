import React from "react";
import LeftNav from "./leftNav";

export default function Header() {
  return (
    <div className="w-full h-32 p-4 flex justify-center z-50 relative bg-teal-100">
      <div className="lg:w-5/6 w-11/12 flex justify-between items-center relative">
        <LeftNav />
      </div>
    </div>
  );
}
