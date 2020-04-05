import React from "react";
import Header from "./navbar/index";

export default function Layout({ children }) {
  return (
    <div className="relative flex flex-col">
      <Header />
      {children}
    </div>
  );
}
