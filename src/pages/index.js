import React from "react";
import "../index/index.css";
import bgImage from "../images/workingOne.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
export default function IndexPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden relative">
      <div className="w-3/4 relative flex  mx-auto" style={{ height: "70vh" }}>
        <div className="absolute w-5/6 h-full bg-white z-40 right-0 ">
          <div className="w-11/12 h-full ">
            <img
              src={bgImage}
              className="bg-cover w-full h-full rounded"
              alt="working"
            />
          </div>
          <motion.button
            whileHover={{ backgroundColor: "rgb(255, 132, 115)" }}
            transition={{ duration: 0.2 }}
            className="absolute bg-white h-20 w-20 rounded-full shadow-2xl flex justify-center text-3xl"
            style={{
              right: "60px",
              transform: "translateY(50%)",
              top: "calc(50% - 4rem)"
            }}
          >
            <IoIosArrowForward />
          </motion.button>
        </div>
        <div
          className="absolute p-6 bg-white rounded shadow-xl z-50 left-0"
          style={{
            width: "30%",
            transform: "translateY(20%)"
          }}
        >
          <div className="py-4">
            <p className="text-4xl font-black">Revolutionize your workspace</p>
          </div>
          <div className="py-4 w-11/12">
            <p className="text-small leading-relaxed">
              Job searching doesn't HAVE to be so hard. One account, one site,
              all the jobs. Whether you're an established professional or
              up-and-comer find you new home.
            </p>
          </div>
          <div className="py-4 relative">
            <input
              className="w-full py-4 px-4 border-black border text-small rounded text-black input-text-black"
              placeholder="Job title"
              type="text"
            />
            <div
              className="absolute bg-white px-2"
              style={{ left: "1rem", top: ".5rem" }}
            >
              <p className="text-xs text-gray-600">find your ideal job</p>
            </div>

            <motion.button
              className="w-full rounded text-white bg-black font-black mt-8 py-4"
              whileHover={{ backgroundColor: "rgb(255, 132, 115)" }}
              transition={{ duration: 0.2 }}
            >
              Submit
            </motion.button>
          </div>
        </div>
      </div>
      <div className="w-full flex mx-auto lg:mt-32 justify-center p-12 lg:flex-no-wrap flex-wrap h-screen">
        <div
          className="absolute h-screen w-screen bg-gray-300"
          style={{ transform: "skewY(-12px)" }}
        />
      </div>
    </div>
  );
}
