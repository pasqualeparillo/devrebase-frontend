import React from "react";
import Header from "./navigation/index";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
}
