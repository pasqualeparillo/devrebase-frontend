import React from "react";
import { motion } from "framer-motion";
import { TiBookmark } from "react-icons/ti";

export default function Card({
  title,
  id,
  company,
  handleOnClick,
  data,
  url,
  location
}) {
  return (
    <motion.div
      className="w-full flex py-6 px-4 rounded-sm border-b cursor-pointer"
      onClick={() => handleOnClick(data)}
    >
      <div className="flex items-center lg:px-4 pr-2">
        <div className="lg:h-20 h-12 lg:w-20 w-12 rounded-full bg-black" />
      </div>
      <div className="flex flex-wrap flex-1" style={{ flexBasis: "40%" }}>
        <div className="w-full">
          <p
            className="lg:text-xl text-sm font-bold break-all"
            style={{ maxWidth: "80%" }}
          >
            {title}
          </p>
        </div>

        <div className="w-full flex items-center " style={{ maxWidth: "80%" }}>
          <p className="text-gray-500 lg:text-base text-xs">{company}</p>
          <div className="h-1 w-1 bg-gray-500 rounded-full mx-4" />
          <p className="text-gray-500 lg:text-base text-xs">{id} day ago</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center flex-1">
        <div className="w-full flex items-end">
          <p className="font-semibold lg:text-base text-xs">Full-Time</p>
        </div>
        <div className="w-full flex items-start">
          <p className="text-gray-500 lg:text-base text-xs">{location}</p>
        </div>
      </div>
      <div className="flex items-center w-1/6 flex-1 justify-end">
        <div className="w-1/6 flex justify-end">
          <motion.div
            className="text-gray-500"
            whileHover={{ color: "#63b3ed" }}
          >
            <TiBookmark className="h-8 w-8" />
          </motion.div>
        </div>
        <div className="w-1/6 flex flex-wrap justify-end">
          <div className="w-full my-1 flex justify-end">
            <div className="h-1 w-1 bg-gray-500 rounded-full" />
          </div>
          <div className="w-full my-1 flex justify-end">
            <div className="h-1 w-1 bg-gray-500 rounded-full" />
          </div>
          <div className="w-full my-1 flex justify-end">
            <div className="h-1 w-1 bg-gray-500 rounded-full" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
