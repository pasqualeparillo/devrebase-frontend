import React from "react";
import Header from "./header";
import Map from "./map";
import { withRouter } from "react-router-dom";
import Modal from "./modal";

function Results() {
  return (
    <div className="flex flex-wrap justify-center w-full relative">
      <Modal />
      <div className="w-1/6 h-screen sticky top-0 bottom-0 left-0">
        <div className="flex flex-col flex-wrap p-6 items-center justify-center mt-12">
          <div className="w-1/2 flex justify-start">
            <p className="font-black text-xl">Job Types</p>
          </div>
          <div className="w-1/2 flex items-center justify-between mt-6">
            <input
              type="checkbox"
              className="w-4 h-4 border-2 border-gray-500 rounded-sm"
            />
            <p className="text-sm font-semibold">Full-Time</p>
          </div>
          <div className="w-1/2 flex items-center justify-between mt-6">
            <input
              type="checkbox"
              className="w-4 h-4 border-2 border-gray-500 rounded-sm"
            />
            <p className="text-sm font-semibold">Part-Time</p>
          </div>
          <div className="w-1/2 flex items-center justify-between mt-6">
            <input
              type="checkbox"
              className="w-4 h-4 border-2 border-gray-500 rounded-sm"
            />
            <p className="text-sm font-semibold">Internship</p>
          </div>
          <div className="w-1/2 flex items-center justify-between mt-6">
            <input
              type="checkbox"
              className="w-4 h-4 border-2 border-gray-500 rounded-sm"
            />
            <p className="text-sm font-semibold">Freelance</p>
          </div>
          <div className="w-1/2 flex items-center justify-between mt-6">
            <input
              type="checkbox"
              className="w-4 h-4 border-2 border-gray-500 rounded-sm"
            />
            <p className="text-sm font-semibold">Student</p>
          </div>
        </div>
        <div className="flex flex-col flex-wrap p-6 items-center justify-center">
          <div className="w-1/2 flex justify-start">
            <p className="font-black text-xl">Job Roles</p>
          </div>
          <div className="w-1/2 flex items-center justify-between mt-6">
            <input
              type="checkbox"
              className="w-4 h-4 border-2 border-gray-500 rounded-sm"
            />
            <p className="text-sm font-semibold">Frontend</p>
          </div>
          <div className="w-1/2 flex items-center justify-between mt-6">
            <input
              type="checkbox"
              className="w-4 h-4 border-2 border-gray-500 rounded-sm"
            />
            <p className="text-sm font-semibold">Backend</p>
          </div>
          <div className="w-1/2 flex items-center justify-between mt-6">
            <input
              type="checkbox"
              className="w-4 h-4 border-2 border-gray-500 rounded-sm"
            />
            <p className="text-sm font-semibold">Design</p>
          </div>
          <div className="w-1/2 flex items-center justify-between mt-6">
            <input
              type="checkbox"
              className="w-4 h-4 border-2 border-gray-500 rounded-sm"
            />
            <p className="text-sm font-semibold">Management</p>
          </div>
          <div className="w-1/2 flex justify-start mt-12">
            <button className="pl-6 pr-6 pt-2 pb-2 bg-teal-900 rounded-lg">
              <p className="text-white">Clear</p>
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-5/6 w-11/12 flex flex-col justify-between flex-wrap">
        <Header />
        <Map />
      </div>
    </div>
  );
}
export default withRouter(Results);
