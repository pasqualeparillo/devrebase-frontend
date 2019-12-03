import React from "react";
import MediaQuery from "react-responsive";

export default function HeroStyle() {
  return (
    <React.Fragment>
      <MediaQuery minWidth={992}>
        <div
          className="absolute lg:h-64 lg:w-64 w-32 h-32 flex flex-wrap "
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
      </MediaQuery>
      <MediaQuery maxWidth={992}>
        <div
          className="absolute lg:h-64 lg:w-64 w-32 h-32 flex flex-wrap right-0"
          style={{ top: "24rem" }}
        >
          <div className="w-full justify-between flex">
            {[0, 1, 2, 3, 4].map(id => (
              <div key={id} className="w-3 h-3 bg-yellow-400 rounded-full" />
            ))}
          </div>
          <div className="w-full justify-between flex">
            {[0, 1, 2, 3, 4].map(id => (
              <div key={id} className="w-3 h-3 bg-yellow-400 rounded-full" />
            ))}
          </div>
          <div className="w-full justify-between flex">
            {[0, 1, 2, 3, 4].map(id => (
              <div key={id} className="w-3 h-3 bg-yellow-400 rounded-full" />
            ))}
          </div>
          <div className="w-full justify-between flex">
            {[0, 1, 2, 3, 4].map(id => (
              <div key={id} className="w-3 h-3 bg-yellow-400 rounded-full" />
            ))}
          </div>
          <div className="w-full justify-between flex">
            {[0, 1, 2, 3, 4].map(id => (
              <div key={id} className="w-3 h-3 bg-yellow-400 rounded-full" />
            ))}
          </div>
        </div>
      </MediaQuery>
    </React.Fragment>
  );
}
