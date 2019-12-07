import React from "react";
import SearchBar from "../search/searchBar";
import HeroText from "../index/heroText";
import { motion } from "framer-motion";
export default function HeroSearch() {
  return (
    <div className="lg:w-3/6 w-5/6 flex flex-grow flex-col lg:self-start lg:mb-16 lg:mt-0 mt-12 z-50">
      <HeroText />
      <motion.div
        animate={{ y: 0 }}
        initial={{ y: 200 }}
        transition={{ type: "spring", mass: 2, damping: 50 }}
        className="flex"
      >
        <SearchBar
          styles={
            "shadow-2xl lg:w-5/6 w-full self-center lg:self-start lg:p-3 p-1 mt-20"
          }
        />
      </motion.div>
    </div>
  );
}
