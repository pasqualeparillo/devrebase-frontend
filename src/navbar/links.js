import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Links() {
  return (
    <div className="flex items-center justify-end w-2/3">
      {links.map((data, id) => (
        <Link text={data.text} key={id} />
      ))}
      <div className="h-10 flex items-center">
        <input
          className="h-full border-2 border-black px-4 py-1 rounded-bl-lg rounded-tl-lg"
          type="text"
          placeholder="Your email address"
        />
        <motion.button
          className="h-full bg-black font-black text-white px-10 py-1 rounded-br-lg rounded-tr-lg border-t-2 border-b-2 border-r-2  border-black"
          whileHover={{ backgroundColor: "rgb(255, 132, 115)" }}
          transition={{ duration: 0.2 }}
        >
          Get started
        </motion.button>
      </div>
    </div>
  );
}

function Link({ text }) {
  const [active, setActive] = useState(false);
  return (
    <motion.p
      className="lg:text-base text-xs mx-6 font-semibold relative cursor-pointer "
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <motion.span
        className="absolute w-full h-1  left-0 right-0"
        style={{ bottom: "0", backgroundColor: "rgb(255, 132, 115)" }}
        animate={active ? { y: 5, opacity: 1 } : { y: 20, opacity: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
      />
      {text}
    </motion.p>
  );
}
let links = [
  {
    url: "/results",
    text: "Jobs"
  },
  {
    url: "/companies",
    text: "Companies"
  }
];
