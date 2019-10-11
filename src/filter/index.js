import React from "react";
import Categories from "./categories";
export default function Filter() {
  const jd = [
    {
      type: "Design",
      color: "bg-yellow-400",
      hoverColor: "#f6e05e"
    },
    {
      type: "Management",
      color: "bg-purple-400",
      hoverColor: "#b794f4"
    },
    {
      type: "Frontend",
      color: "bg-green-400",
      hoverColor: "#68d391"
    },
    {
      type: "Backend",
      color: "bg-red-400",
      hoverColor: "#fc8181"
    }
  ];
  return (
    <div className="flex flex-wrap justify-center w-full mb-10 mt-10">
      <div className="w-5/6 flex flex-col">
        <div className="flex flex-wrap text-left ">
          <p className="text-3xl font-black mb-10">Filter By Category</p>
        </div>
      </div>
      <div className="flex w-5/6 justify-around flex-wrap">
        {jd.map((type, id) => (
          <Categories
            key={id}
            color={type.color}
            type={type.type}
            hoverColor={type.hoverColor}
          />
        ))}
      </div>
    </div>
  );
}
