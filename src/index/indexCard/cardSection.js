import React from "react";
import IndexAdCard from "./indexAdCard";
import IntroCard from "./introCard";

export default function CardSection() {
  return (
    <div
      className="lg:w-8/9 md:w-8/9 w-full flex flex-wrap mx-auto justify-between lg:flex-no-wrap flex-wrap pt-12 pb-12 rounded lg:px-0 px-4 lg:mt-24 mt-0"
      style={{ maxWidth: "1440px" }}
    >
      <IntroCard />
      {[0, 1, 2].map(id => (
        <IndexAdCard key={id} i={id} />
      ))}
    </div>
  );
}
