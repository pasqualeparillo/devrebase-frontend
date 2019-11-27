import React from "react";
import Logo from "./Logo";
import Links from "./links";

export default function Header() {
  return (
    <div className="w-full h-32 p-4 flex z-50 relative bg-white items-center relative overflow-hidden">
      <Logo />
      <Links />
    </div>
  );
}
