import React, { useEffect, useContext } from "react";
import Search from "../search";
import { SearchContext } from "../store/search";
import Card from "../results/card";
import Footer from "../navigation/footer/footer";

export default function IndexPage() {
  const { setSearch } = useContext(SearchContext);
  useEffect(() => {
    setSearch("https://jsonplaceholder.typicode.com/posts");
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="w-full relative bg-teal-100 relative -mt-32 mb-32"
        style={{ minHeight: "85vh" }}
      >
        <div className="w-5/6 flex flex-col mx-auto ">
          <div className="w-full flex flex-col h-full lg:mt-56 mt-32 ">
            <div className="lg:w-1/2 w-full flex flex-col">
              <div className="w-full flex flex-col justify-center z-20">
                <p className="lg:text-6xl text-4xl font-bold leading-none text-teal-900">
                  Find the most{" "}
                </p>
                <p className="lg:text-6xl text-4xl font-bold leading-none text-teal-900">
                  <span className="border-b-8 border-yellow-400">exciting</span>
                  <span> startup jobs</span>
                </p>
              </div>
            </div>

            <Search />
            <div className="w-full flex flex-col justify-center z-20 mb-8 absolute bottom-0">
              <p className=" text-sm leading-none text-gray-600">
                Made by <span className="font-black text-teal-900">PatP</span>,
                and powered by{" "}
                <span className="font-black text-teal-900">Django</span>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute w-1/2 right-0 top-0 bottom-0 z-10 items-end flex flex-col max-h-screen mt-32">
          <div
            className="absolute w-full overflow-hidden"
            style={{ maxHeight: "calc(100vh - 8rem)" }}
          >
            <img
              className="bg-cover w-full"
              style={{ borderTopLeftRadius: "1.5rem" }}
              src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              alt="startup"
            />
            <div
              className="bottom-0 left-0 absolute bg-white flex flex-wrap justify-between p-4"
              style={{ height: "15vh", width: "15vh" }}
            >
              <div className="w-1/2 flex justify-center items-center">
                <div className="bg-yellow-400 w-2 h-2" />
              </div>
              <div className="w-1/2 flex justify-center items-center">
                <div className="bg-yellow-400 w-2 h-2" />
              </div>
              <div className="w-1/2 flex justify-center items-center">
                <div className="bg-yellow-400 w-2 h-2" />
              </div>
              <div className="w-1/2 flex justify-center items-center">
                <div className="bg-yellow-400 w-2 h-2" />
              </div>
              <div className="w-1/2 flex justify-center items-center">
                <div className="bg-yellow-400 w-2 h-2" />
              </div>
              <div className="w-1/2 flex justify-center items-center">
                <div className="bg-yellow-400 w-2 h-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative relative pt-32 bg-white -mt-32">
        <div className="w-5/6 flex flex-col relative mx-auto mt-32">
          <p className="lg:text-6xl text-4xl font-bold leading-none text-teal-900">
            Explore jobs
          </p>
          <p className="font-bold leading-none text-teal-900 mt-6">
            Find a job you love.
          </p>
          <div className="w-full flex flex-wrap relative mx-auto mt-12 mb-12">
            <Card title={"Junior Software Engineer"} />
            <Card title={"Entry Level - Software Engineer"} />
            <Card title={"Software Engineer"} />
            <Card title={"Software Engineer"} />
            <Card title={"Software Engineer"} />
            <Card title={"Software Engineer"} />
          </div>
          <div className="flex w-full justify-end text-teal-900">
            <a
              href="/"
              className="text-lg border-b-2 border-teal-900 leading-none"
            >
              Explore All Jobs
            </a>
          </div>
        </div>
      </div>
      <div className="w-full relative relative pt-32 pb-32 bg-white">
        <div className="w-5/6 flex flex-col relative mx-auto mt-12">
          <p className="lg:text-6xl text-4xl font-bold leading-none text-teal-900">
            Startups
          </p>
          <p className="font-bold leading-none text-teal-900 mt-6">
            Find a job you love.
          </p>
          <div className="w-full flex flex-wrap relative mx-auto mt-12 mb-12">
            <Card title={"Junior Software Engineer"} />
            <Card title={"Entry Level - Software Engineer"} />
            <Card title={"Software Engineer"} />
            <Card title={"Software Engineer"} />
            <Card title={"Software Engineer"} />
            <Card title={"Software Engineer"} />
          </div>
          <div className="flex w-full justify-end text-teal-900">
            <a
              href="/"
              className="text-lg border-b-2 border-teal-900 leading-none"
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
