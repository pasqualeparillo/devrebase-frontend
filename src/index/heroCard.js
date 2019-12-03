import React from "react";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { CardWrapper } from "../components/card";

export default function HeroCard({ title, text, first, center, last }) {
  return (
    <CardWrapper
      first={first}
      center={center}
      last={last}
      whileHover={{ scale: 1.02 }}
    >
      <div className="w-full">
        <div className="bg-yellow-200 h-32 w-32 flex items-center justify-center">
          <AiOutlineFolderOpen className="h-24 w-24" />
        </div>
      </div>
      <p className="font-black text-2xl my-4">{title}</p>
      <p className="font-black text-base my-12">{text}</p>
    </CardWrapper>
  );
}
