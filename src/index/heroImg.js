import React from "react";
import Startup from "../images/startup.jpg";

export default function HeroImg({ children }) {
  return (
    <div className="absolute lg:w-2/6 w-full right-0 top-0 bottom-0 z-10 items-center flex flex-col max-h-screen mt-32 lg:mr-32">
      <div className="absolute w-full h-full">
        <img
          className="bg-cover w-full relative z-40 lg:opacity-100 opacity-0"
          src={Startup}
          style={{ maxHeight: "calc(100vh - 16rem)" }}
          alt="startup"
        />
        {children}
        <div className="flex w-full bottom-0 items-end lg:relative absolute">
          <div className="lg:h-32 h-16 lg:w-32 w-16 bg-black flex justify-center items-center flex-wrap lg:p-12 p-4 z-40 lg:flex hidden">
            <div className="w-full flex justify-between">
              <span className="w-2 h-2 bg-white" />
              <span className="w-2 h-2 bg-white" />
            </div>
            <div className="w-full flex justify-between">
              <span className="w-2 h-2 bg-white" />
              <span className="w-2 h-2 bg-white" />
            </div>
          </div>
          <div className="flex flex-col justify-end px-4 py-4 ">
            <p className="text-gray-600 tracking-wide lg:text-base text-sm">
              Join company for a match,
            </p>
            <p className="text-gray-600 tracking-wide lg:text-base text-sm">
              check openings at{" "}
              <span className="text-black font-black">Ramsus</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
