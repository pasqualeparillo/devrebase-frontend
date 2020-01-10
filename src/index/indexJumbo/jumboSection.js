import React from "react";
import IndexSearch from "./indexSearch";
import IndexCarousel from "./indexCarousel";

export default function JumboSection() {
  return (
    <div className="lg:w-8/9 md:w-8/9 w-11/12 relative flex justify-center mx-auto lg:mb-24 mb-64 jumbotron_size">
      <IndexCarousel />
      <IndexSearch />
    </div>
  );
}
