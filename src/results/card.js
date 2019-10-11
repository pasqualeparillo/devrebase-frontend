import React from "react";

export default function Card({ title, id }) {
  return (
    <div className="lg:w-1/5 md:w-5/12 w-full p-6 flex flex-grow flex-wrap border-2 border-black card">
      <div className="flex w-full pt-2 pb-2 items-center">
        <span className="h-6 w-6 rounded-full bg-yellow-400" />{" "}
        <p className="font-black pl-4 pr-4 text-xs">design</p>
      </div>
      <div className="flex w-full text-left pt-2 pb-2">
        <p className="text-base font-black break-all">{title}</p>
      </div>
      <div className="flex w-full items-center pt-2 pb-2">
        <p className="text-xs font-black ">Seattle, WA</p>
        <span className="h-2 w-2 bg-black rounded-full ml-4 mr-4" />
        <p className="text-xs font-black ">Full-Time</p>
      </div>
      <div className="flex w-full items-center pt-2 pb-2 justify-between">
        <div className="flex w-1/4">
          <img alt="#" className="h-8 w-8 bg-black" />
        </div>
        <div className="flex justify-start w-3/4">
          <p className="text-xs font-black text-black">Founders,</p>
          <span className="ml-1 mr-1" />
          <p className="text-xs font-black text-black"> {id} days ago</p>
        </div>
      </div>
    </div>
  );
}
