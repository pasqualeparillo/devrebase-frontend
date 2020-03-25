import React, { useContext } from "react";
import "./filter.css";
import { Checkbox, Button, DropDown } from "./formHelper";
import { ModalContext } from "../store/modal";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import MediaQuery from "react-responsive";
export function Filter() {
  return (
    <MediaQuery minWidth={992}>
      <div className="w-1/5 relative border-r bg-white">
        <div className="sticky bottom-0 left-0 " style={{ top: "5rem" }}>
          <div className="flex flex-col flex-wrap p-6 items-center justify-center w-full">
            <div className="w-full flex justify-start  px-6">
              <p className="font-semibold text-xl">Job types</p>
            </div>
            <div className="flex w-full justify-start  px-6">
              <div className="flex items-center justify-between mt-4 filter-spacing">
                <Button text={"Full-Time"} />
              </div>
              <div className="flex items-center justify-between mt-4 filter-spacing">
                <Button text={"Part-Time"} />
              </div>
            </div>
            <div className="flex w-full justify-start  px-6">
              <div className="flex items-center justify-between mt-4 filter-spacing">
                <Button text={"Freelance"} />
              </div>
              <div className="flex items-center justify-between mt-4 filter-spacing">
                <Button text={"Internship"} />
              </div>
            </div>
            <div className="flex w-full justify-start  px-6">
              <div className="flex items-center justify-between mt-4 filter-spacing">
                <Button text={"Volenteer"} />
              </div>
              <div className="flex items-center justify-between mt-4 filter-spacing">
                <Button text={"Contract"} />
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-wrap p-6 items-center justify-center">
            <div className="w-full flex justify-start  px-6">
              <p className="font-semibold text-xl">Job Roles</p>
            </div>
            <div className="flex flex-col w-full justify-start px-6">
              <div className="flex items-center justify-between mt-2 filter-spacing">
                <Checkbox text={"User experience"} />
              </div>
            </div>
            <div className="flex flex-col w-full justify-start px-6">
              <div className="flex items-center justify-between mt-2 filter-spacing">
                <Checkbox text={"Interaction designer"} />
              </div>
            </div>
            <div className="flex flex-col w-full justify-start px-6">
              <div className="flex items-center justify-between mt-2 filter-spacing">
                <Checkbox text={"Creative director"} />
              </div>
            </div>
            <div className="flex flex-col w-full justify-start px-6">
              <div className="flex items-center justify-between mt-2 filter-spacing">
                <Checkbox text={"User interface designer"} />
              </div>
            </div>
            <div className="flex flex-col w-full justify-start px-6">
              <div className="flex items-center justify-between mt-2 filter-spacing">
                <Checkbox text={"Product designer"} />
              </div>
            </div>
            <div className="flex flex-col w-full justify-start px-6">
              <div className="flex items-center justify-between mt-2 filter-spacing ">
                <Checkbox text={"Motion graphics designer"} />
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-wrap p-6 items-center justify-center">
            <div className="w-full flex justify-start  px-6">
              <DropDown />
            </div>
          </div>
        </div>
      </div>
    </MediaQuery>
  );
}

export function MobileFilter() {
  const { isFilterActive, setIsFilterActive } = useContext(ModalContext);
  return (
    <MediaQuery maxWidth={992}>
      <motion.div
        initial={{ x: "-100%" }}
        animate={isFilterActive ? { x: 0 } : { x: "-100%" }}
        transition={{ type: "spring", damping: 100 }}
        style={{ top: "5rem" }}
        className="w-full h-screen fixed z-50 flex"
      >
        <div className="h-screen relative w-4/5 border-r flex flex-col flex-grow">
          <div className="flex flex-col flex-wrap py-3 px-3 items-center justify-start w-full bg-white">
            <div className="w-full flex justify-start  px-3">
              <p className="font-semibold text-xl">Job types</p>
            </div>
            <div className="flex w-full justify-start  px-3">
              <div className="flex items-center justify-between mt-4 filter-spacing">
                <Button text={"Full-Time"} />
              </div>
              <div className="flex items-center justify-between mt-4 filter-spacing">
                <Button text={"Part-Time"} />
              </div>
            </div>
            <div className="flex w-full justify-start  px-3">
              <div className="flex items-center justify-between mt-4 filter-spacing">
                <Button text={"Freelance"} />
              </div>
              <div className="flex items-center justify-between mt-4 filter-spacing">
                <Button text={"Internship"} />
              </div>
            </div>
            <div className="flex w-full justify-start  px-3">
              <div className="flex items-center justify-between mt-4 filter-spacing">
                <Button text={"Volenteer"} />
              </div>
              <div className="flex items-center justify-between mt-4 filter-spacing">
                <Button text={"Contract"} />
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-wrap py-3 px-3 items-center justify-center bg-white flex-1">
            <div className="w-full flex justify-start  px-3">
              <p className="font-semibold text-xl">Job Roles</p>
            </div>
            <div className="flex flex-col w-full justify-start px-3">
              <div className="flex items-center justify-between mt-2 filter-spacing">
                <Checkbox text={"User experience"} />
              </div>
            </div>
            <div className="flex flex-col w-full justify-start px-3">
              <div className="flex items-center justify-between mt-2 filter-spacing">
                <Checkbox text={"Interaction designer"} />
              </div>
            </div>
            <div className="flex flex-col w-full justify-start px-3">
              <div className="flex items-center justify-between mt-2 filter-spacing">
                <Checkbox text={"Creative director"} />
              </div>
            </div>
            <div className="flex flex-col w-full justify-start px-3">
              <div className="flex items-center justify-between mt-2 filter-spacing">
                <Checkbox text={"User interface designer"} />
              </div>
            </div>
            <div className="flex flex-col w-full justify-start px-3">
              <div className="flex items-center justify-between mt-2 filter-spacing">
                <Checkbox text={"Product designer"} />
              </div>
            </div>
            <div className="flex flex-col w-full justify-start px-3">
              <div className="flex items-center justify-between mt-2 filter-spacing ">
                <Checkbox text={"Motion graphics designer"} />
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-wrap py-6 px-3 lg:items-center items-start lg:ml-0 ml-4 justify-start bg-white flex-1">
            <DropDown />
          </div>
          <button
            className="text-black text-2xl px-4 py-4 absolute top-0 right-0"
            onClick={() => setIsFilterActive(!isFilterActive)}
          >
            <IoMdClose />
          </button>
        </div>
        <div
          className="w-1/4 bg-transparent"
          onClick={() => setIsFilterActive(!isFilterActive)}
        />
      </motion.div>
    </MediaQuery>
  );
}
