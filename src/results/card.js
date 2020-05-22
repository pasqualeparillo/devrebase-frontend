import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./modal";
import MediaQuery from "react-responsive";
import { FiLink } from "react-icons/fi";
export default function Card({
  title,
  id,
  company,
  url,
  location,
  body,
  data,
}) {
  const [isActive, setIsActive] = useState(false);
  return (
    <React.Fragment>
      <MediaQuery minWidth={1024}>
        <div className="flex w-full py-8 px-4 rounded cursor-pointer my-2 bg-white rounded-lg subtext mx-4">
          {console.log(data)}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-300" />
          </div>
          <div
            className="w-3/5 flex flex-1 flex-col px-6"
            style={{ maxHeight: "6rem" }}
          >
            <h2 className="text-base font-semibold ">{title}</h2>
            <p className="text-xs text-gray-500 pb-2">{location}</p>
            <p className="text-xs text-gray-500 pb-2">{company}</p>
            <div className="flex flex-grow-0 items-center justify-start">
              <div className="text-xs px-2 py-2 bg-gray-200 rounded inline-flex items-center">
                <FiLink />
                <p className="mx-2">{url}</p>
              </div>
            </div>
          </div>
          <div className="w-1/5 flex"></div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1024}>
        <motion.div className="flex w-full ml-2 mr-2 py-4 px-4 rounded border cursor-pointer my-2">
          <div className="flex flex-wrap w-4/5 justify-between">
            <div className="w-4/5 flex flex-col">
              <p className="subtext font-bold break-all truncate">{title}</p>
              <p className="text-gray-500 subtext text-sm">{company}</p>
            </div>

            <div className="w-full flex flex-col items-start justify-between py-4">
              <div className="flex items-center w-full flex-wrap">
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
            <div className="flex flex-wrap py-2 flex-1">
              <Modal isActive={isActive} />
              <motion.button
                className="px-4 py-2 flex rounded text-white subtext"
                style={{ backgroundColor: "blue" }}
                whileHover={{ backgroundColor: "darkblue" }}
                transition={{ duration: 0.2 }}
                whileTap={{ scale: 1.01 }}
                onClick={() => setIsActive(!isActive)}
              >
                <p className="text-xs">Details</p>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </MediaQuery>
    </React.Fragment>
  );
}
