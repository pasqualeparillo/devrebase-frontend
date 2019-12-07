import React from "react";
import { motion } from "framer-motion";
export default function HeroText() {
  return (
    <React.Fragment>
      <div className="relative overflow-hidden z-10">
        <motion.p
          className="lg:text-5vw text-4xl font-bold leading-none tracking-tightest py-4"
          animate={{ y: 0 }}
          initial={{ y: 200 }}
          transition={{ type: "spring", mass: 2, damping: 50 }}
        >
          Find the most <br />{" "}
        </motion.p>
      </div>
      <div className="relative overflow-hidden">
        <motion.p
          className="lg:text-5vw text-4xl font-bold leading-none tracking-tightest py-4"
          animate={{ y: 0 }}
          initial={{ y: 200 }}
          transition={{ type: "spring", mass: 2, damping: 50 }}
        >
          <span
            className="border-b-8"
            style={{ borderColor: "rgb(255, 132, 115)" }}
          >
            exciting
          </span>{" "}
          startup jobs.
        </motion.p>
      </div>
    </React.Fragment>
  );
}
