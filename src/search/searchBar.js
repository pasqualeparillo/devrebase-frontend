import React, { useContext } from "react";
import { SearchContext } from "../store/search";
import { withRouter } from "react-router-dom";
import useForm from "react-hook-form";

function SearchBar({ history, styles }) {
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
      className={
        styles + " flex bg-white relative rounded-lg border border-gray-200"
      }
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="w-full bg-transparent px-8 py-6 lg:text-left text-center border-r border-gray-200 tracking-wider text-gray-400 lg:text-2xl text-xs"
        type="text"
        placeholder="Job title or keywords"
        name="jobDescription"
        onChange={handleChange}
        value={search.jobDescription || ""}
        ref={register}
      />
      <input
        className="w-full bg-transparent px-8 py-6 lg:text-left text-center tracking-wider text-gray-400 lg:text-2xl text-xs"
        type="text"
        placeholder="Location"
        onChange={handleChange}
        value={search.areaCode || ""}
        name="areaCode"
        ref={register}
      />

      <button className="flex self-center items-center lg:h-16 text-white lg:px-12 px-4 py-4 mr-1 bg-black right-0 rounded-lg tracking-wider lg:text-2xl text-xs">
        <p>Search</p>
      </button>
    </form>
  );
}
export default withRouter(SearchBar);
