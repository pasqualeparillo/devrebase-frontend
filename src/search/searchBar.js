import React, { useContext } from "react";
import { SearchContext } from "../store/search";
import { withRouter } from "react-router-dom";
import useForm from "react-hook-form";
import { motion } from "framer-motion";
import { JOB_SEARCH_URL } from "../constants";
function SearchBar({ history, styles }) {
  const { register, handleSubmit } = useForm();
  const { setSearch } = useContext(SearchContext);
  function onSubmit(value) {
    setSearch(JOB_SEARCH_URL + value.jobDescription);
    history.push("/results");
  }

  return (
    <form
      className="flex lg:w-4/5 w-full bg-white sticky"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="flex-grow bg-transparent lg:px-4 px-2 py-4 lg:text-left text-center tracking-wider text-black subtext rounded-none border-r w-2/5"
        type="text"
        placeholder="Job title or keywords"
        name="jobDescription"
        ref={register}
      />
      <input
        className="flex-grow bg-transparent lg:px-4 px-2 py-4 lg:text-left text-center tracking-wider text-black subtext rounded-none w-2/5"
        type="text"
        placeholder="Location"
        name="areaCode"
        ref={register}
      />

      <div className="flex w-1/5 justify-center items-center">
        <motion.button
          className="self-center w-1/2 items-center rounded text-white py-3 subtext"
          style={{ backgroundColor: "blue" }}
          whileHover={{ backgroundColor: "darkblue" }}
          transition={{ duration: 0.2 }}
          whileTap={{ scale: 1.01 }}
        >
          <p>Search</p>
        </motion.button>
      </div>
    </form>
  );
}
export default withRouter(SearchBar);
