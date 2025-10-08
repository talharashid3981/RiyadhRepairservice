import React from "react";
import "../style/global.css";
import darkBlue_bg from "../assets/images/darkBlue_bg.jpeg";

const DarkBlue_bg = () => {
  return (
    <section
      className="absolute w-full h-full bg-cover bg-center py-20 overflow-hidden"
      style={{
        backgroundImage: `url(${darkBlue_bg})`,
      }}
    >
      <div className="absolute left-4 sm:left-6 lg:left-10 bottom-4 sm:bottom-6 lg:bottom-10 rotate-slow z-0">
        <DottedCircle />
      </div>

      <div className="absolute right-4 sm:right-6 lg:right-10 top-4 sm:top-6 lg:top-10 rotate-slow z-0">
        <DottedCircle />
      </div>
    </section>
  );
};

const DottedCircle = () => (
  <svg width="80" height="80" viewBox="0 0 100 100" fill="none" className="sm:w-24 sm:h-24 lg:w-28 lg:h-28">
    <defs>
      <pattern
        id="dots"
        x="0"
        y="0"
        width="10"
        height="10"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="1" cy="1" r="1" fill="white" />
      </pattern>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#dots)" />
  </svg>
);

export default DarkBlue_bg;