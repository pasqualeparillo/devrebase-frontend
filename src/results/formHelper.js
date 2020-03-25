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
        className="w-full absolute h-full z-20"
        onClick={() => filterResults()}
      />
      <label className="ml-8 truncate subtext" htmlFor="checkbox">
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
            ? { color: "white", backgroundColor: "blue" }
            : { color: "black", backgroundColor: "white" }
        }
        initial={{ color: "#a0aec0", backgroundColor: "white" }}
        transition={{ duration: 0.2 }}
        className="px-3 py-1 flex flex-grow rounded subtext truncate border"
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
      <div className="flex flex-wrap lg:w-full w-4/5">
        <label className="pb-4 font-semibold text-xl" htmlFor="distance">
          Distance:
        </label>
        <select
          className="w-full border px-4 py-2 rounded bg-white subtext"
          name="distance"
        >
          <option className="subtext" value="5">
            within 5 miles
          </option>
          <option className="subtext" value="10">
            within 10 miles
          </option>
          <option className="subtext" value="20">
            within 20 miles
          </option>
          <option className="subtext" value="50">
            within 50 miles
          </option>
          <option className="subtext" value="50">
            any
          </option>
        </select>
      </div>
    </React.Fragment>
  );
}
