import React from "react";
import Header from "./navbar/index";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
}
