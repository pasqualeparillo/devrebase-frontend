import React from "react";

export default function IndexCta() {
  return (
    <div
      className="lg:w-4/5 w-full flex lg:flex-row flex-col self-center relative mb-24 pt-12 pb-12 lg:px-0 px-4 lg:mt-24"
      style={{ maxWidth: "1440px" }}
    >
      <div className="lg:w-11/12 w-full lg:py-24 py-4 lg:px-12 rounded bg-red-400 relative flex flex-wrap">
        <div className="lg:w-1/2 w-full flex flex-col px-4">
          <p className="sub-heading py-2">IMPACT</p>
          <h1 className="heading py-2 lg:text-5xl text-xl tracking-wide">
            Space to make your greatest impact
          </h1>
          <p className="subtext py-2 lg:text-xl text-base lg:leading-loose tracking-wide">
            WeWork is changing the way people and companies work. Spanning
            one-third of the Fortune 500 to grassroot nonprofits, our members
            are empowering employees, fueling innovation, and uplifting
            communities.
          </p>
        </div>
        <div className="lg:w-1/2 w-full flex flex-col px-4 relative">
          <div
            className="w-full h-full bg-yellow-400 rounded lg:flex hidden"
            style={{ marginLeft: "31.5%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
