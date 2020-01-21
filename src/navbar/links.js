import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Links() {
  return (
    <div className="flex items-center justify-end w-2/3">
      {links.map((data, id) => (
        <Link text={data.text} key={id} />
      ))}
    </div>
  );
}

function Link({ text }) {
  const [active, setActive] = useState(false);
  return (
    <motion.p
      className="lg:text-base text-xs mx-6 relative cursor-pointer heading"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <motion.span
        className="absolute w-full h-1 left-0 right-0"
        style={{ bottom: "0", backgroundColor: "#ffd460" }}
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
