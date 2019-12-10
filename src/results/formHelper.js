import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { SearchContext } from "../store/search";
import Axios from "axios";
import { ResultsContext } from "../store/results";

export function Checkbox({ text }) {
  const { search } = useContext(SearchContext);
  const { setResults } = useContext(ResultsContext);
  const [active, setIsActive] = useState(false);
  function filterResults() {
    if (active && search) {
      setIsActive(false);
      Axios.get(search).then(response => setResults(response.data.results));
    } else {
      setIsActive(true);
      Axios.get(search + "+" + text).then(response =>
        setResults(response.data.results)
      );
    }
  }
  return (
    <div className="checkbox relative">
      <input
        type="checkbox"
        className="w-full absolute h-full z-20 "
        onClick={() => filterResults()}
      />
      <label className="ml-8 text-gray-700 truncate text-sm" htmlFor="checkbox">
        {text}
      </label>
    </div>
  );
}

export function Button({ text }) {
  const { search } = useContext(SearchContext);
  const { setResults } = useContext(ResultsContext);
  const [active, setActive] = useState(false);
  function filterResults() {
    if (active && search) {
      Axios.get(search).then(response => setResults(response.data.results));
    } else {
      Axios.get(search + "+" + text).then(response =>
        setResults(response.data.results)
      );
    }
  }

  return (
    <div onClick={() => filterResults()}>
      <motion.button
        animate={
          active
            ? { color: "#ffffff", backgroundColor: "#000000" }
            : { color: "#a0aec0", backgroundColor: "#edf2f7" }
        }
        initial={{ color: "#a0aec0", backgroundColor: "#edf2f7" }}
        transition={{ duration: 0.2 }}
        className={"px-3 py-1 rounded-full text-sm truncate"}
        onClick={() => setActive(!active)}
      >
        {text}
      </motion.button>
    </div>
  );
}
export function DropDown() {
  return (
    <React.Fragment>
      <div className="flex flex-wrap lg:w-full w-5/6">
        <label className="pb-4 font-semibold text-xl" htmlFor="distance">
          Distance:
        </label>
        <select
          className="w-full border border-black px-4 py-2 rounded-full bg-gray-100 text-sm"
          name="distance"
        >
          <option className=" text-sm" value="5">
            within 5 miles
          </option>
          <option className=" text-sm" value="10">
            within 10 miles
          </option>
          <option className=" text-sm" value="20">
            within 20 miles
          </option>
          <option className=" text-sm" value="50">
            within 50 miles
          </option>
          <option className=" text-sm" value="50">
            any
          </option>
        </select>
      </div>
    </React.Fragment>
  );
}
