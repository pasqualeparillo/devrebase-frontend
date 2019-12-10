import React, { useContext } from "react";
import { ModalContext } from "../store/modal";
import { MdKeyboardArrowDown } from "react-icons/md";
import MediaQuery from "react-responsive";
export default function Header() {
  const { isFilterActive, setIsFilterActive } = useContext(ModalContext);

  return (
    <div
      className="flex flex-wrap text-left items-center sticky top-0 bg-white border-b border-l h-20 sticky overflow-hidden"
      style={{ marginLeft: "-1px", top: "5rem" }}
    >
      <MediaQuery maxWidth={992}>
        <div
          className="h-20 w-20 bg-tan-400 flex flex-col justify-between p-4 cursor-pointer "
          onClick={() => setIsFilterActive(!isFilterActive)}
        >
          <span className="w-full h-1 bg-white" />
          <span className="w-full h-1 bg-white" />
          <span className="w-full h-1 bg-white" />
        </div>
      </MediaQuery>
      <div className="flex items-center px-4">
        <p className="text-xl ">Sort by</p>
      </div>

      <div className="flex items-center px-2">
        <p className="text-xl font-black">Most Recent</p>
        <MdKeyboardArrowDown className="h-6 w-6" />
      </div>
    </div>
  );
}
