import React from "react";
import { motion } from "framer-motion";
export default function Logo() {
  return (
    <div className="flex lg:px-12 px-4">
      <div className="items-center justify-center flex">
        <motion.div
          className="flex bg-black h-10 w-10 relative rounded-lg mx-4 flex p-2 justify-between"
          whileHover={{ backgroundColor: "rgb(255, 132, 115)" }}
          transition={{ duration: 0.2 }}
        >
          <span className="h-4 w-px p-px bg-white self-center" />
          <span className="h-full w-px p-px bg-white" />
          <span className="h-full w-px p-px bg-white" />
          <span className="h-4 w-px p-px bg-white self-center" />
        </motion.div>
        <motion.p className="text-4xl font-semibold tracking-wide">
          hub
        </motion.p>
      </div>
    </div>
  );
}
