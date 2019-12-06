import React, { useState } from "react";
import { motion } from "framer-motion";
export function Checkbox({ text }) {
  return (
    <div className="checkbox relative">
      <input type="checkbox" className="w-full absolute h-full z-20 " />
      <label className="ml-8 text-gray-700 truncate text-lg" htmlFor="checkbox">
        {text}
      </label>
    </div>
  );
}
export function Button({ text }) {
  const [active, setActive] = useState(false);
  return (
    <motion.button
      animate={
        active
          ? { color: "#ffffff", backgroundColor: "#000000" }
          : { color: "#a0aec0", backgroundColor: "#edf2f7" }
      }
      initial={{ color: "#a0aec0", backgroundColor: "#edf2f7" }}
      transition={{ duration: 0.2 }}
      className={"px-3 py-1 rounded-full text-lg truncate"}
      onClick={() => setActive(!active)}
    >
      {text}
    </motion.button>
  );
}
export function DropDown() {
  return (
    <React.Fragment>
      <div className="flex flex-wrap w-full">
        <label className="py-4 font-semibold text-xl" htmlFor="distance">
          Distance:
        </label>
        <select
          className="w-full border border-black px-4 py-2 rounded-full"
          name="distance"
        >
          <option value="5">within 5 miles</option>
          <option value="10">within 10 miles</option>
          <option value="20">within 20 miles</option>
          <option value="50">within 50 miles</option>
          <option value="50">any</option>
        </select>
      </div>
    </React.Fragment>
  );
}
