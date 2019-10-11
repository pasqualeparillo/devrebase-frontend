import React from "react";
import { motion } from "framer-motion";

export default function Card({ title, id, body }) {
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
      className="job-card lg:w-1/5 md:w-5/12 w-full p-6 flex flex-grow flex-wrap border-2 border-black "
      variants={variant}
      initial={"inactive"}
      whileHover={"active"}
    >
      <div className="flex w-full pt-2 pb-2 items-center">
        <div className="flex">
          <span className="h-6 w-6 rounded-full bg-yellow-400" />{" "}
        </div>
        <div className=" flex flex-1">
          <p className="font-black pl-4 pr-4 text-xs">{title}</p>
        </div>
      </div>
      <div className="flex w-full text-left pt-2 pb-2">
        <p className="text-base font-black break-all">{body}</p>
      </div>
      <div className="flex w-full items-center pt-2 pb-2">
        <p className="text-xs font-black ">Seattle, WA</p>
      </div>
      <div className="flex w-full items-center pt-2 pb-2">
        <p className="text-xs font-black ">Full-Time</p>
      </div>

      <div className="flex w-full items-center pt-2 pb-2 justify-between">
        <div className="flex w-1/4">
          <img alt="#" className="h-8 w-8 bg-black" />
        </div>
        <div className="flex justify-start w-3/4">
          <p className="text-xs font-black text-black">Founders,</p>
          <span className="ml-1 mr-1" />
          <p className="text-xs font-black text-black"> {id} days ago</p>
        </div>
      </div>
    </motion.div>
  );
}
