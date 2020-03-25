import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./modal";
import MediaQuery from "react-responsive";
export default function Card({ title, id, company, data, url, location }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <React.Fragment>
      <MediaQuery minWidth={992}>
        <motion.div className="flex w-full ml-2 mr-32 py-8 px-4 rounded border cursor-pointer my-2">
          <div className="flex flex-wrap w-4/5 justify-between">
            <div className="w-4/5 flex flex-col">
              <p className="subtext font-bold break-all truncate">{title}</p>
              <p className="text-gray-500 subtext text-sm">{company}</p>
            </div>

            <div className="w-full flex flex-col items-start justify-between mt-6">
              <div className="flex items-center w-1/2 flex-wrap">
                <p
                  className="subtext text-xs border px-2 my-1"
                  style={{ color: "blue" }}
                >
                  {id} day ago
                </p>
                <p
                  className="subtext text-xs border px-2 mx-2 my-1"
                  style={{ color: "blue" }}
                >
                  {location}
                </p>
                <p
                  className="subtext text-xs border px-2 my-1"
                  style={{ color: "blue" }}
                >
                  Full-Time
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-1/5 justify-center">
            <div className="flex flex-wrap justify-center flex-1">
              <Modal isActive={isActive} />
              <motion.button
                className="px-4 py-2 flex rounded text-white subtext"
                style={{ backgroundColor: "blue" }}
                whileHover={{ backgroundColor: "darkblue" }}
                transition={{ duration: 0.2 }}
                whileTap={{ scale: 1.01 }}
                onClick={() => setIsActive(!isActive)}
              >
                <p>Details</p>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </MediaQuery>
      <MediaQuery maxWidth={992}>
        <motion.div className="w-full flex py-8 px-4 rounded-sm border-b-2 cursor-pointer">
          <div className="flex flex-wrap flex-1">
            <div className="w-1/2 flex flex-wrap items-center">
              <p className="lg:text-base text-base font-bold w-full">{title}</p>
              <p className="lg:text-base text-sm font-bold w-full py-1">
                {company}
              </p>
              <p className="text-gray-500 lg:text-base text-xs py-2">
                {id} day ago
              </p>
            </div>
            <div className="w-1/4 flex flex-wrap">
              <div className="w-full flex items-end">
                <p className="font-semibold lg:text-base text-xs">Full-Time</p>
              </div>
              <div className="w-full flex items-center">
                <p className="text-gray-500 lg:text-base text-xs">{location}</p>
              </div>
            </div>
            <div className="w-1/4 flex flex-wrap">
              <div className="w-full flex items-center">
                <Modal isActive={isActive} />
                <button
                  className="bg-tan-400 px-2 py-2"
                  onClick={() => setIsActive(!isActive)}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </MediaQuery>
    </React.Fragment>
  );
}
