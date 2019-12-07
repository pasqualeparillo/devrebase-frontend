import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
export default function Header() {
  return (
    <div
      className="flex flex-wrap text-left h-20 items-center sticky top-0 bg-white border-b border-l sticky"
      style={{ marginLeft: "-1px", top: "6rem" }}
    >
      <p className="text-xl pl-4">Sort by</p>
      <div className="flex items-center px-4">
        <p className="text-xl font-black">Most Recent</p>
        <MdKeyboardArrowDown className="h-6 w-6" />
      </div>
    </div>
  );
}
