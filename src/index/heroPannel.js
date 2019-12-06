import React from "react";
import { motion } from "framer-motion";
export default function HeroPannel() {
  return (
    <div className="w-2/6 flex">
      <motion.div
        className="relative w-full bottom-0 bg-white flex flex-col shadow-xl border-tan-400 border-2"
        style={{
          minHeight: "64vh",
          bottom: "-10vh"
        }}
        animate={{ y: 0 }}
        initial={{ y: "100%" }}
        transition={{
          type: "spring",
          mass: 2,
          damping: 100
        }}
      >
        <div className="flex w-full justify-end relative pb-24">
          <p
            className=" text-tan-400 text-5vw absolute font-black uppercase"
            style={{ transform: "translateY(-50%)" }}
          >
            Latest
          </p>
        </div>

        {[0, 1, 2, 3].map(id => (
          <motion.div
            className="flex flex-col flex-grow justify-center w-full px-12 bg-white flex-wrap text-left cursor-pointer border-black border-0"
            key={id}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 29px -3px rgba(0,0,0,0.30)",
              borderWidth: "1px",
              zIndex: 50,
              transitionEnd: {
                zIndex: 10
              }
            }}
            whileTap={{
              scale: 1
            }}
            transition={{
              type: "spring",
              mass: 0.5,
              damping: 50
            }}
          >
            <p className="w-full text-base text-tan-400 font-bold py-2 uppercase">
              Company
            </p>
            <p className="w-full  font-medium text-2xl">
              Junior - Software Engineer
            </p>
            <p className="w-full  text-xs text-gray-500 font-semibold py-4">
              April, 24, 2019 - Seattle, WA
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
