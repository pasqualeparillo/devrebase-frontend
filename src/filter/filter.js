import React, { useEffect, useRef, useState } from "react";
import { useWindowSize } from "../hooks/resize";

export default function Filter({ isOpen, open }) {
  const filterRef = useRef();
  const [height] = useWindowSize();
  const [size, setSize] = useState({ height: null, width: null });

  useEffect(() => {
    setSize({
      height: filterRef.current.getBoundingClientRect().height,
      width: filterRef.current.getBoundingClientRect().width
    });
  }, [height]);
  return (
    <div
      className="flex flex-grow category-card mr-2 ml-2 border-2 border-black relative z-40 justify-center items-center"
      ref={filterRef}
      onClick={() => open()}
    >
      {isOpen ? (
        <ul
          className="absolute flex flex-col w-full justify-center text-center z-50 align-middle"
          style={{ left: "-2px", top: `calc(${size.height}px - 2px)` }}
        >
          <li
            className="bg-white border-r-2 border-l-2 border-black flex justify-center items-center"
            style={{ height: `${size.height}px`, width: `${size.width}px` }}
          >
            <p className="text-black">Filter 1</p>
          </li>
          <li
            className="bg-white border-2 border-black flex justify-center items-center"
            style={{ height: `${size.height}px`, width: `${size.width}px` }}
          >
            <p className="text-black">Filter 2</p>
          </li>
          <li
            className="bg-white border-r-2 border-l-2 border-b-2 border-black flex justify-center items-center"
            style={{ height: `${size.height}px`, width: `${size.width}px` }}
          >
            <p className="text-black">Filter 3</p>
          </li>
        </ul>
      ) : null}
    </div>
  );
}
