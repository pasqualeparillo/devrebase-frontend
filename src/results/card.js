import React, { useState } from "react";
import { motion } from "framer-motion";
import { TiBookmark } from "react-icons/ti";
import Modal from "./modal";
import MediaQuery from "react-responsive";
export default function Card({ title, id, company, data, url, location }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <React.Fragment>
      <MediaQuery minWidth={992}>
        <motion.div className="w-full flex py-8 px-4 rounded-sm border-b cursor-pointer">
          <div className="flex flex-wrap flex-1" style={{ flexBasis: "10%" }}>
            <div className="w-full">
              <p
                className="lg:text-xl text-sm font-bold break-all"
                style={{ maxWidth: "80%" }}
              >
                {title}
              </p>
            </div>

            <div
              className="w-full flex items-center "
              style={{ maxWidth: "80%" }}
            >
              <p className="text-gray-500 lg:text-base text-xs">{company}</p>
              <div className="h-1 w-1 bg-gray-500 rounded-full mx-4" />
              <p className="text-gray-500 lg:text-base text-xs">{id} day ago</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center flex-1">
            <Modal isActive={isActive} />
            <button
              className="bg-tan-400 px-6 py-2 h-12"
              onClick={() => setIsActive(!isActive)}
            >
              Details
            </button>
          </div>
          <div className="flex flex-wrap justify-center flex-1">
            <div className="w-full flex items-end">
              <p className="font-semibold lg:text-base text-xs">Full-Time</p>
            </div>
            <div className="w-full flex items-start">
              <p className="text-gray-500 lg:text-base text-xs">{location}</p>
            </div>
          </div>
          <div className="flex items-center w-1/6 flex-1 justify-end">
            <div className="w-1/6 flex justify-end">
              <motion.div
                className="text-gray-500"
                whileHover={{ color: "#63b3ed" }}
              >
                <TiBookmark className="h-8 w-8" />
              </motion.div>
            </div>
            <div className="w-1/6 flex flex-wrap justify-end">
              <div className="w-full my-1 flex justify-end">
                <div className="h-1 w-1 bg-gray-500 rounded-full" />
              </div>
              <div className="w-full my-1 flex justify-end">
                <div className="h-1 w-1 bg-gray-500 rounded-full" />
              </div>
              <div className="w-full my-1 flex justify-end">
                <div className="h-1 w-1 bg-gray-500 rounded-full" />
              </div>
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
