import React from "react";
import { useFetch } from "./fetch";
import Card from "./card";
export default function Map() {
  const res = useFetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.response) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-wrap -ml-2 ">
      {res.response.map((data, id) => (
        <Card key={id} title={data.title} id={data.id} />
      ))}
    </div>
  );
}
