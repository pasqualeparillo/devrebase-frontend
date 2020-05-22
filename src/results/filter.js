import React, { useContext, useState, useEffect } from "react";
import { ModalContext } from "../store/modal";
import { motion } from "framer-motion";
import MediaQuery from "react-responsive";
import { FiSearch, FiMoreHorizontal } from "react-icons/fi";

export function Filter({ count }) {
  const [page, setPage] = useState(1);
  const [tPage, setTPage] = useState(0);
  useEffect(() => {
    setTPage(Math.ceil(parseInt(count) / 20));
  }, [count]);
  return (
    <MediaQuery minWidth={1025}>
      <form
        className="sticky top-0 right-0 left-0 pt-4 flex flex-col items-center mx-4  rounded-xl"
        style={{ backgroundColor: "#FAF7F5" }}
      >
        <div className="relative w-full h-12 border overflow-visible flex justify-end rounded-xl ">
          <div className="absolute left-0 top-0 bottom-0 h-full pl-6 pointer-events-none flex justify-center items-center">
            <FiSearch />
          </div>
          <input
            type="text"
            className="w-full h-full rounded-full pl-12 font-semibold cursor-text"
          />
          <div className="absolute right-0 top-0 bottom-0 mr-2 flex item-center justify-center ">
            <motion.div
              className="flex items-center  border rounded-full uppercase font-semibold text-xs w-full px-4 mt-2 mb-2 cursor-pointer"
              whileHover={{ boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.06)" }}
            >
              <div className="mr-1">
                <FiMoreHorizontal size={23} />
              </div>
              <p className="uppercase">filter</p>
            </motion.div>
          </div>
        </div>
        <div className="flex items-end justify-end w-full px-6  py-2">
          {isNaN(page) || isNaN(tPage) ? (
            <p className="text-xs subtext"> Loading...</p>
          ) : (
            <p className="text-xs subtext">
              Page {page} of {tPage} results
            </p>
          )}
        </div>
      </form>
    </MediaQuery>
  );
}

export function MobileFilter() {
  const { isFilterActive, setIsFilterActive } = useContext(ModalContext);
  return (
    <MediaQuery maxWidth={992}>
      <div></div>
    </MediaQuery>
  );
}
