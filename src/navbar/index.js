import React from "react";
import Logo from "./logo";
import Links from "./links";
import MediaQuery from "react-responsive";
import MobileNav from "./mobile";
export default function Header() {
  return (
    <div
      className="w-full py-3 flex items-center relative overflow-hidden bg-white mx-auto"
      style={{ maxWidth: "1440px" }}
    >
      <MediaQuery minWidth={1025}>
        <div className="flex w-full justify-between mx-auto">
          <Logo />
          <Links />
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1025}>
        <div className="flex w-11/12 justify-between mx-auto items-center">
          <div className="flex items-center justify-center h-full">
            <MobileNav />
            <Logo />
          </div>
          <p>Contact Us</p>
        </div>
      </MediaQuery>
    </div>
  );
}
