import React, { useState } from "react";
import { motion } from "framer-motion";
import MediaQuery from "react-responsive";

export default function HeroPannel() {
  return (
    <React.Fragment>
      <MediaQuery minWidth={992}>
        <div className="lg:w-2/6 flex z-50">
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
              <HeroCard key={id} />
            ))}
          </motion.div>
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={992}>
        <div className="w-full flex z-50 mt-20">
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
            <div className="flex w-full justify-end relative lg:pb-24 pb-8">
              <p
                className="text-tan-400 text-4xl absolute font-black uppercase"
                style={{ transform: "translateY(-50%)" }}
              >
                Latest
              </p>
            </div>
            {[0, 1, 2, 3].map(id => (
              <HeroCard key={id} />
            ))}
          </motion.div>
        </div>
      </MediaQuery>
    </React.Fragment>
  );
}

function HeroCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex flex-col flex-grow justify-center w-full lg:px-12 px-4 bg-white flex-wrap align-middle cursor-pointer border-transparent border relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 29px -3px rgba(0,0,0,0.30)",
        borderColor: "#000",
        zIndex: 50
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
      <HeroModal isHovered={isHovered} />
      <p className="w-full text-base text-tan-400 font-bold lg:py-2 py-1 uppercase">
        Company
      </p>
      <p className="w-full font-medium lg:text-2xl text-xl">
        Junior - Software Engineer
      </p>
      <p className="w-full text-xs text-gray-500 font-semibold lg:py-4 py-2">
        April, 24, 2019 - Seattle, WA
      </p>
    </motion.div>
  );
}

function HeroModal({ isHovered }) {
  return (
    <React.Fragment>
      <MediaQuery minWidth={992}>
        <motion.div
          className="absolute w-full h-64 bg-tan-400 z-50 border border-black flex self-center p-6 z-20 shadow-2xl"
          animate={isHovered ? { display: "flex" } : { display: "none" }}
          style={{ left: "-105%" }}
        >
          <div
            className="flex h-20 w-20 bg-white absolute bg-tan-400 border-r border-t border-black"
            style={{
              top: "calc(50% - 2.5rem)",
              transform: "rotate(45deg)",
              right: "-2.55rem"
            }}
          />
          <p> test text</p>
        </motion.div>
      </MediaQuery>
      <MediaQuery maxWidth={992}>
        <motion.div
          className="absolute w-full h-64 bg-tan-400 z-50 border border-black flex self-center p-6 z-20 shadow-2xl"
          animate={isHovered ? { display: "flex" } : { display: "none" }}
          style={{ top: "-200%" }}
        >
          <div
            className="flex h-10 w-10 bg-white absolute bg-tan-400 border-r border-b border-black right-0 left-0"
            style={{
              left: "calc(50% - 1.25rem)",
              bottom: "-1.25rem",
              transform: "rotate(45deg)"
            }}
          />
          <p> test text</p>
        </motion.div>
      </MediaQuery>
    </React.Fragment>
  );
}
