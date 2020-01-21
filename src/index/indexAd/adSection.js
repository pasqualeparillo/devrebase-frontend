import React from "react";
import AdCard from "./adCard";
export default function AdSection() {
  return (
    <div
      className="lg:w-8/9 md:w-8/9 w-full flex flex-wrap self-center justify-center lg:flex-no-wrap flex-wrap relative lg:mt-24  rounded overflow-hidden"
      style={{ maxWidth: "1440px" }}
    >
      <img
        src="https://images.unsplash.com/photo-1557801558-10597b455287?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        className="w-full h-full bg-cover bg-gray-500 absolute"
        alt="background"
      />
      <div className="lg:w-4/5 w-full bg-white px-4 py-4 z-50 lg:mt-32 flex flex-wrap">
        <div className="w-full py-2">
          <div className="py-2 flex flex-col py-12">
            <p className="font-sans text-4xl font-black pb-2 heading">
              Why DevRebase?
            </p>
            <p className="font-sans text-base font-semibold py-2 lg:w-2/3 w-full subtext leading-relaxed tracking-wide">
              With a decade of insights and expertise, we’re reimagining real
              estate so that you can focus on your business.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-center">
          <AdCard
            url={
              "https://images.unsplash.com/photo-1559136656-3db4bf6c35f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            }
          />
          <AdCard
            url={
              "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            }
          />
          <AdCard
            url={
              "https://images.unsplash.com/photo-1558095625-f882e3436125?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            }
          />
        </div>
      </div>
    </div>
  );
}
