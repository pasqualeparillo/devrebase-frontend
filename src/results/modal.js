import React, { useContext } from "react";
import { ResultsContext } from "../store/results";
export default function Modal() {
  const { open, setOpen, data, setData } = useContext(ResultsContext);
  function handleClick() {
    setData({});
    setOpen(!open);
  }
  return open ? (
    <div
      onClick={() => handleClick()}
      className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen flex flex-1 flex-grow overflow-y-hidden z-50"
    >
      <div className="flex flex-1 flex-wrap lg:m-16 m-4 lg:p-16 p-6 border-2 border-black bg-white overflow-y-scroll">
        <p>{data.job_title}</p>
        <p>{data.job_body}</p>
      </div>
    </div>
  ) : null;
}
