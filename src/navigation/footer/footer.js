import React from "react";

export default function Footer() {
  return (
    <footer className="flex bg-teal-100  pt-32 pb-32 relative">
      <div className="flex lg:flex-row flex-col w-4/5 mx-auto p-2 pb-10 border-b border-teal-900 justify-between">
        <div className="flex lg:w-1/4 w-full  flex-wrap">
          <div className="flex">
            <h2 className="font-semibold text-teal-900 text-md underline">
              devrebase.com
            </h2>
          </div>
          <div className="flex mt-6">
            <p className="font-semibold text-indigo-light text-xs leading-loose">
              DevRebase is a licensed digital asset aggregataor and custodian.
              Track, Sort and store digital assets in a regulated, secure, and
              compliant manner.
            </p>
          </div>
          <div className="flex w-1/2 justify-between items-start mt-10">
            <button className="rounded-sm bg-indigo-front text-gray-500 h-8 w-8 bg-teal-900">
              F
            </button>
            <button className="rounded-sm bg-indigo-front text-gray-500 h-8 w-8 bg-teal-900">
              T
            </button>
            <button className="rounded-sm bg-indigo-front text-gray-500 h-8 w-8 bg-teal-900">
              I
            </button>
          </div>
          <div className="flex mt-10">
            <p className="font-semibold text-grey-dark text-sm leading-loose">
              Let's Talk:{" "}
              <span className="text-gray-500">hello@devrebase.com</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:w-1/4 w-full lg:mt-0 mt-10">
          <div className="flex">
            <h2 className="text-teal-base text-base uppercase ">
              Submit for updates
            </h2>
          </div>
          <div className="flex flex-col flex-1 justify-around mt-6">
            <p className="text-indigo-light font-semibold text-xs">
              Subscribe to get updates and notifications about our software and
              products.
            </p>
            <form className="justify-around rounded mt-4 mb-4">
              <input
                className="bg-indigo-front text-base appearance-none w-full py-4 px-3 text-white focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="email@email.com"
              />
            </form>
            <button className="text-indigo-back bg-teal-base font-semibold uppercase text-xs rounded px-2 py-4 w-24">
              Submit
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
