import React from "react";

export default function HeroText() {
  return (
    <div className="lg:w-3/4 w-full flex items-center lg:self-start self-center lg:mb-20 lg:mt-0 mt-20">
      <p className="lg:text-6vw text-4xl font-bold leading-none tracking-tightest">
        Find the most <br />{" "}
        <span className="border-b-8 border-yellow-400">exciting</span> startup
        jobs.
      </p>
    </div>
  );
}
