import React, { useState } from "react";

export function Checkbox({ text }) {
  return (
    <div className="checkbox relative">
      <input type="checkbox" className="w-full absolute h-full z-20 " />
      <label className="ml-8 text-gray-700 truncate" htmlFor="checkbox">
        {text}
      </label>
    </div>
  );
}
export function Button({ text }) {
  const [active, setActive] = useState(false);
  return (
    <button
      className={
        active
          ? "bg-black text-white text-sm px-3 py-1 rounded-full"
          : "bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full "
      }
      onClick={() => setActive(!active)}
    >
      {text}
    </button>
  );
}
