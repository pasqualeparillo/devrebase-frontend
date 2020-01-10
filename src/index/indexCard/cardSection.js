import React from "react";
import IndexAdCard from "./indexAdCard";
import IntroCard from "./introCard";

export default function CardSection() {
  return (
    <div
      className="lg:w-8/9 md:w-8/9 w-11/12 flex flex-wrap mx-auto justify-between lg:flex-no-wrap flex-wrap pt-12 pb-12 rounded lg:px-12 md: px-8 px-4"
      style={{ maxWidth: "1440px", backgroundColor: "#f7f7f7" }}
    >
      <IntroCard />
      {[0, 1, 2].map(id => (
        <IndexAdCard key={id} />
      ))}
    </div>
  );
}
