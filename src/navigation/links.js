import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Links() {
  const [active, setActive] = useState(false);
  return (
    <div className="flex items-center justify-center">
      <p
        className="lg:text-xl text-xs mx-6 font-semibold relative cursor-pointer w-full"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        Find Jobs
        <motion.span
          className="absolute w-full h-1 bg-black left-0 "
          style={{ bottom: "0" }}
          animate={active ? { y: 5, opacity: 1 } : { y: 20, opacity: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
        />
      </p>
      <p
        className="lg:text-xl text-xs mx-6 font-semibold relative cursor-pointer w-full"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        Companies
        <motion.span
          className="absolute w-full h-1 bg-black left-0 "
          style={{ bottom: "0" }}
          animate={active ? { y: 5, opacity: 1 } : { y: 20, opacity: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
        />
      </p>
    </div>
  );
}
