import React from "react";
import { motion } from "framer-motion";
export default function HeroAside() {
  return (
    <motion.div className="flex flex-col w-1/12 h-full justify-center items-center z-20 relative items-center">
      <div className="z-20 ">
        <p
          className="text-tan-400 font-bold relative py-4 flex items-center overflow-hidden"
          style={{
            writingMode: "tb-rl"
          }}
        >
          Scroll
        </p>
      </div>
      <div className="overflow-hidden h-24 w-1 relative">
        <motion.span
          animate={{ y: "-100%" }}
          initial={{ y: "100%" }}
          transition={{
            duration: 4,
            loop: Infinity,
            ease: [0.785, 0.135, 0.15, 0.86]
          }}
          className="h-80 w-1 bg-tan-400 absolute"
        />
      </div>
    </motion.div>
  );
}
