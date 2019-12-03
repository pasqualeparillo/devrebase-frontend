import React, { useContext } from "react";
import { SearchContext } from "../store/search";
import { withRouter } from "react-router-dom";
import useForm from "react-hook-form";

const SearchBar = React.memo(function SearchBar({ history, styles }) {
  const { register, handleSubmit } = useForm();
  const { setSearch } = useContext(SearchContext);
  function onSubmit(value) {
    setSearch(`http://127.0.0.1:8000/?search=${value.jobDescription}`);
    history.push("/results");
  }

  return (
    <form
      className={
        styles +
        " flex bg-white relative rounded-lg border border-gray-200 z-50"
      }
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="w-full bg-transparent px-8 py-6 lg:text-left text-center border-r border-gray-200 tracking-wider text-gray-400 lg:text-2xl text-xs"
        type="text"
        placeholder="Job title or keywords"
        name="jobDescription"
        ref={register}
      />
      <input
        className="w-full bg-transparent px-8 py-6 lg:text-left text-center tracking-wider text-gray-400 lg:text-2xl text-xs"
        type="text"
        placeholder="Location"
        name="areaCode"
        ref={register}
      />

      <button className="flex self-center items-center lg:h-16 text-white lg:px-12 px-4 py-4 mr-1 bg-black right-0 rounded-lg tracking-wider lg:text-2xl text-xs">
        <p>Search</p>
      </button>
    </form>
  );
});
export default withRouter(SearchBar);
