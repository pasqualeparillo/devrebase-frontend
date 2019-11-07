import React from "react";
import { motion } from "framer-motion";

export default function Card({ title, id, body, handleOnClick, data }) {
  const variant = {
    active: {
      x: -5,
      y: 5
    },
    inactive: {
      x: 0,
      y: 0
    }
  };
  return (
    <motion.div
      className="job-card lg:w-1/4 md:w-5/12 w-full pl-12 pr-12 pb-16 pt-16 flex flex-grow flex-wrap rounded-sm hover:shadow-lg bg-gray-100 cursor-pointer"
      variants={variant}
      initial={"inactive"}
      whileHover={"active"}
      onClick={() => handleOnClick(data)}
    >
      <div className="flex w-full pt-2 pb-2 items-center">
        <div className=" flex flex-1">
          <p className="font-black text-3xl text-teal-900 break-all">{title}</p>
        </div>
      </div>

      <div className="flex w-full items-center pt-2 pb-2 text-teal-900">
        <p className=" text-lg ">
          Full-Time <span className="text-gray-500">in</span> Seattle, WA
        </p>
      </div>
      <div className="flex w-full items-center pt-2 pb-2">
        <button className="rounded-full pt-2 pb-2 pl-4 pr-4 text-teal-900 bg-yellow-100 font-black flex items-center justify-between  mr-2">
          <div className="h-4 w-4 bg-yellow-400 mr-4 rounded-full" />
          design
        </button>
        <button className="rounded-full pt-2 pb-2 pl-4 pr-4 text-teal-900 bg-pink-200 font-black flex items-center justify-between mr-2 ml-2">
          <div className="h-4 w-4 bg-pink-600 mr-4 rounded-full" />
          design
        </button>
      </div>
      <div className="flex w-full pt-2 pb-2 items-center mt-4">
        <div className="flex">
          <span className=" h-16 w-16 rounded-lg bg-white" />
        </div>
        <div className=" flex flex-col flex-1">
          <p className="pl-4 pr-4 text-lg text-teal-900">Facebook</p>
          <p className="pl-4 pr-4 text-lg text-gray-500">3 days ago</p>
        </div>
      </div>
    </motion.div>
  );
}
