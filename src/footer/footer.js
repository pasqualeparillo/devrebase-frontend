import React from "react";
import { FiTwitter, FiFacebook, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="flex w-full lg:py-24 py-8 flex justify-center">
      <div
        className="w-full border-t-2 pt-12 flex justify-between px-1"
        style={{ maxWidth: "1440px" }}
      >
        <p className="sub-heading text-lg">DevRebase &#9400; 2020</p>
        <div className="flex text-2xl ">
          <div className="mx-2">
            <FiFacebook />
          </div>
          <div className="mx-2">
            <FiTwitter />
          </div>
          <div className="mx-2">
            <FiLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
}
