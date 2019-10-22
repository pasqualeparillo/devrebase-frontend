import React, { useState } from "react";
import Filter from "./filter";
export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  function setOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="flex flex-wrap justify-center w-full mb-10 mt-10">
      <div className="w-5/6 flex flex-col">
        <div className="flex flex-wrap text-left ">
          <p className="text-3xl font-black mb-10">Filter</p>
        </div>
      </div>
      <div className="flex w-5/6 justify-around flex-wrap">
        <Filter open={() => setOpen()} isOpen={isOpen} />
        <Filter open={() => setOpen()} isOpen={isOpen} />
        <div className="flex flex-grow category-card mr-2 ml-2 border-2 border-black p-6 relative" />
        <div className="flex flex-grow category-card mr-2 ml-2 border-2 border-black p-6 relative" />
      </div>
      {console.log(isOpen)}
    </div>
  );
}
