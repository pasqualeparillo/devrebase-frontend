import React from "react";
import HeroStyle from "../index/heroStyle";
import HeroPannel from "../index/heroPannel";
import HeroAside from "../index/heroAside";
import HeroSearch from "../index/heroSearch";
export default function IndexPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ height: "200vh" }}>
      <div
        className="w-full h-screen relative flex justify-center relative"
        style={{ marginTop: "calc(6rem - 1px" }}
      >
        <HeroStyle />
        <div className="w-11/12 flex mx-auto lg:mt-56 mt-32 justify-between">
          <HeroSearch />
          <HeroPannel />
          <HeroAside />
        </div>
      </div>
    </div>
  );
}
