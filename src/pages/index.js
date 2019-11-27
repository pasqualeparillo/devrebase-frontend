import React, { useEffect, useContext } from "react";
import { SearchContext } from "../store/search";
import Card from "../results/card";
import Footer from "../navigation/footer/footer";
import HeroImg from "../index/heroImg";
import SearchBar from "../search/searchBar";
import HeroText from "../index/heroText";
import HeroStyle from "../index/heroStyle";

export default function IndexPage() {
  const { setSearch } = useContext(SearchContext);
  useEffect(() => {
    setSearch("https://jsonplaceholder.typicode.com/posts");
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full relative flex justify-center relative -mt-32 mb-32 h-screen">
        <div className="lg:w-5/6 w-11/12 flex flex-col mx-auto lg:mt-56 mt-32 z-20 ">
          <HeroText />
          <SearchBar
            styles={
              "shadow-2xl lg:w-3/4 w-full mt-10 self-center lg:self-start lg:p-4"
            }
          />
        </div>
        <HeroImg>
          <HeroStyle />
        </HeroImg>
      </div>
      <div className="w-full relative relative pt-32 bg-white -mt-32">
        <div className="w-5/6 flex flex-col relative mx-auto mt-32">
          <p className="lg:text-6xl text-4xl font-bold leading-none">
            Explore jobs
          </p>
          <p className="font-bold leading-none mt-6">Find a job you love.</p>
          <div className="w-full flex flex-wrap relative mx-auto mt-12 mb-12">
            <Card title={"Junior Software Engineer"} />
            <Card title={"Entry Level - Software Engineer"} />
            <Card title={"Software Engineer"} />
            <Card title={"Software Engineer"} />
          </div>
          <div className="flex w-full justify-end">
            <a
              href="/"
              className="text-lg border-b-2 border-black pb-2 leading-none"
            >
              Explore All Jobs
            </a>
          </div>
        </div>
      </div>
      <div className="w-full relative relative pt-32 pb-32 bg-white">
        <div className="w-5/6 flex flex-col relative mx-auto mt-12">
          <p className="lg:text-6xl text-4xl font-bold leading-none">
            Startups
          </p>
          <p className="font-bold leading-none mt-6">Find a job you love.</p>
          <div className="w-full flex justify-center flex-wrap relative mx-auto mt-12 mb-12">
            <Card title={"Junior Software Engineer"} />
            <Card title={"Entry Level - Software Engineer"} />
            <Card title={"Software Engineer"} />
            <Card title={"Software Engineer"} />
          </div>
          <div className="flex w-full justify-end">
            <a
              href="/"
              className="text-lg border-b-2 border-black pb-2 leading-none"
            >
              Explore All Jobs
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
