import React from "react";

export default function HeroStyle() {
  return (
    <div
      className="absolute  h-64 w-64 flex flex-wrap "
      style={{ left: "-14rem", bottom: "2.5rem" }}
    >
      <div className="w-full justify-between flex">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(id => (
          <div key={id} className="w-3 h-3 bg-yellow-400 rounded-full" />
        ))}
      </div>
      <div className="w-full justify-between flex">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(id => (
          <div key={id} className="w-3 h-3 bg-yellow-400 rounded-full" />
        ))}
      </div>
      <div className="w-full justify-between flex">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(id => (
          <div key={id} className="w-3 h-3 bg-yellow-400 rounded-full" />
        ))}
      </div>
      <div className="w-full justify-between flex">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(id => (
          <div key={id} className="w-3 h-3 bg-yellow-400 rounded-full" />
        ))}
      </div>
      <div className="w-full justify-between flex">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(id => (
          <div key={id} className="w-3 h-3 bg-yellow-400 rounded-full" />
        ))}
      </div>
    </div>
  );
}
