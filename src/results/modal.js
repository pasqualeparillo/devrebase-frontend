import React from "react";
import { motion } from "framer-motion";
import MediaQuery from "react-responsive";
export default function Modal({ isActive }) {
  return (
    <React.Fragment>
      <MediaQuery minWidth={992}>
        <motion.div
          className="absolute lg:w-1/4 w-64 lg:h-80 h-56 bg-tan-400 z-50 border border-black"
          style={{ transform: "translateY(-115%)" }}
          animate={isActive ? { display: "flex" } : { display: "none" }}
        >
          <div
            className="flex h-20 w-20 bg-white absolute bg-tan-400 border-r border-b border-black right-0 left-0"
            style={{
              left: "calc(50% - 2.5rem)",
              bottom: "-2.5rem",
              transform: "rotate(45deg)"
            }}
          />
        </motion.div>
      </MediaQuery>
      <MediaQuery maxWidth={992}>
        <motion.div
          className="absolute lg:w-1/4 w-11/12 lg:h-80 h-56 bg-tan-400 z-50 border border-black"
          style={{
            transform: "translateY(-70%)",
            left: "4.15%"
          }}
          animate={isActive ? { display: "flex" } : { display: "none" }}
        >
          <div
            className="flex h-10 w-10 bg-white absolute bg-tan-400 border-r border-b border-black right-0 left-0"
            style={{
              left: "calc(85% - 1.25rem)",
              bottom: "-1.25rem",
              transform: "rotate(45deg)"
            }}
          />
        </motion.div>
      </MediaQuery>
    </React.Fragment>
  );
}
