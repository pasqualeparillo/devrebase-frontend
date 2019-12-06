import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Links({ scrolled }) {
  return (
    <div className="flex items-center justify-center">
      {links.map((data, id) => (
        <Link scrolled={scrolled} text={data.text} key={id} />
      ))}
    </div>
  );
}

function Link({ text, scrolled }) {
  const [active, setActive] = useState(false);
  return (
    <motion.p
      className="lg:text-xl text-xs mx-6 font-semibold relative cursor-pointer w-full "
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      animate={
        scrolled ? { color: "rgb(255, 132, 115)" } : { color: "rgb(0,0,0)" }
      }
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
