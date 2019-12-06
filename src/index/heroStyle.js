import React from "react";
import MediaQuery from "react-responsive";

export default function HeroStyle() {
  return (
    <React.Fragment>
      <MediaQuery minWidth={992}>
        <div
          className="absolute w-screen overflow-hidden bg-white border-b border-black"
          style={{ height: "80vh", opacity: "10%" }}
        >
          <div className="flex flex-wrap justify-between absolute">
            {Array(200)
              .fill(0)
              .map(id => (
                <span
                  style={{
                    height: "10vw",
                    width: "10vw"
                  }}
                  className="border-px border-black"
                  key={id}
                />
              ))}
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={992}>
        <div
          className="absolute w-screen overflow-hidden bg-white border-b border-black"
          style={{ height: "60vh", opacity: "10%" }}
        >
          <div className="flex flex-wrap justify-between absolute">
            {Array(200)
              .fill(0)
              .map(id => (
                <span
                  style={{
                    height: "20vw",
                    width: "20vw"
                  }}
                  className="border-px border-black"
                  key={id}
                />
              ))}
          </div>
        </div>
      </MediaQuery>
    </React.Fragment>
  );
}
