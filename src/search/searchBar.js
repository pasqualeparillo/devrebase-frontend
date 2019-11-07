import React, { useContext } from "react";
import useForm from "react-hook-form";
import { SearchContext } from "../store/search";

export default function SearchBar({ history }) {
  const { register, handleSubmit } = useForm();
  const { search, setSearch } = useContext(SearchContext);
  function onSubmit() {
    setSearch("https://jsonplaceholder.typicode.com/comments");
    history.push("/results");
  }
  function handleChange(e) {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  }

  return (
    <form
      className="flex w-full bg-white relative shadow-2xl rounded-lg lg:p-4 p-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="w-1/2 bg-transparent lg:p-8 pt-6 pb-6 lg:text-lg text-xs lg:text-left text-center border-r border-gray-500 border-dotted rounded-none"
        type="text"
        placeholder="Job title or description"
        name="jobDescription"
        onChange={handleChange}
        value={search.jobDescription || ""}
        ref={register}
      />
      <input
        className=" lg:w-1/4 w-1/4 lg:p-8 pt-6 pb-6 bg-transparent lg:text-lg text-xs lg:text-left text-center rounded-none flex-grow "
        type="text"
        placeholder="Location"
        onChange={handleChange}
        value={search.areaCode || ""}
        name="areaCode"
        ref={register}
      />
      <button className="relative text-white lg:pl-8 lg:pr-8 pl-4 pr-4 bg-teal-900 font-semibold lg:text-lg text-xs right-0 top-0 bottom-0 rounded-lg ">
        <p>Search</p>
      </button>
    </form>
  );
}
