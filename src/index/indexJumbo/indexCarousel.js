import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function IndexCarousel() {
  const [slideWidth, setSlideWidth] = useState(0);
  const [transValue, setTransValue] = useState(0);
  const [currIndex, setCurrIndex] = useState(0);
  const slideRef = useRef(null);
  useEffect(() => {
    setSlideWidth(slideRef.current.getBoundingClientRect().width);
  }, []);
  const urls = [
    "https://images.unsplash.com/photo-1559136656-3db4bf6c35f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80",
    "https://images.unsplash.com/photo-1559523182-a284c3fb7cff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
  ];
  function nextSlide() {
    if (currIndex === urls.length - 1) {
      setCurrIndex(0);
      setTransValue(0);
    }
    if (currIndex < urls.length - 1) {
      setCurrIndex(currIndex + 1);
    }
    if (currIndex > urls.length - 1) {
      setCurrIndex(0);
    }
    setTransValue((slideWidth + 24) * currIndex);
  }

  return (
    <div className="lg:absolute relative w-full h-full bg-white z-40 right-0 flex lg:flex-row flex-col justify-end ">
      <p className="lg:hidden md:hidden block text-3xl font-semibold py-6 heading">
        Revolutionize your workspace
      </p>
      <div className="lg:w-5/6 w-full rounded ">
        <div className="w-full h-full flex overflow-hidden rounded ml-8">
          <div className="inline-flex whitespace-no-wrap h-full">
            <motion.div
              className="w-11/12 rounded relative flex inline-block h-full"
              animate={{ x: -transValue }}
              transition={{ type: "spring", stiffness: 300, damping: 200 }}
              drag="x"
              dragConstraints={{
                left: -slideWidth * (urls.length - 1),
                right: 0
              }}
              dragMomentum={false}
            >
              {urls.map(id => (
                <motion.div
                  style={{
                    width: "1156px",
                    marginRight: "12px",
                    marginLeft: "12px"
                  }}
                  ref={slideRef}
                  className="whitespace-normal w-full h-full flex-shrink-0 rounded overflow-hidden"
                  key={id}
                >
                  <motion.div
                    className="h-full relative overflow-hidden rounded bg-gray-300 w-full block"
                    style={{ paddingBottom: "calc(100% / (16 / 9)" }}
                    key={id}
                  >
                    <motion.img
                      style={{ userSelect: "none", userDrag: "none" }}
                      src={id}
                      key={id}
                      className="bg-cover rounded absolute h-full w-full left-0 right-0 bottom-0 top-0 "
                      alt="working"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <motion.button
        whileHover={{ backgroundColor: "#ccf", color: "blue" }}
        transition={{ duration: 0.2 }}
        className="absolute h-16 w-16 rounded-full shadow-2xl lg:flex md:flex hidden justify-center text-3xl bg-white"
        style={{
          right: "-2rem",
          transform: "translateY(50%)",
          top: "calc(50% - 5rem)",
          color: "blue"
        }}
        onClick={() => nextSlide()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5"
          style={{ transform: "rotate(90deg)", fill: "blue" }}
          viewBox="0 0 11.99 6.99"
        >
          <g data-name="Layer 2">
            <path
              d="M11.85 6.85a.46.46 0 0 1-.67 0L6 1.2.81 6.85a.46.46 0 0 1-.67 0 .46.46 0 0 1 0-.67l5.47-6V.1A.5.5 0 0 1 6 0a.45.45 0 0 1 .35.14v.08l5.46 6a.46.46 0 0 1 .04.63z"
              data-name="Layer 1"
            ></path>
          </g>
        </svg>
      </motion.button>
    </div>
  );
}
