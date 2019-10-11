import React from "react";
import { useFetch } from "./fetch";
import Card from "./card";
export default function Map() {
  const res = useFetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.response) {
    return (
      <div className="flex flex-wrap -ml-2 ">
        <p className="text-5xl font-bold">Loading...</p>
      </div>
    );
  }
  return (
    <div className="flex flex-wrap -ml-2 ">
      {res.response.map((data, id) => (
        <Card key={id} title={data.title} id={data.id} body={data.body} />
      ))}
    </div>
  );
}
