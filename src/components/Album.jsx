import React, { useState } from "react";

const Album = ({ image, date, link }) => {
  const [showView, setShowView] = useState(false);

  return (
    <div
      onMouseOver={() => setShowView(true)}
      onMouseOut={() => setShowView(false)}
      className="rounded-lg relative hover:opacity-70 hover:cursor-pointer"
    >
      <a target="_blank" href={link}>
        <img
          src={image}
          alt="album"
          className="rounded-lg w-36 max-w-sm md:w-full mx-auto border-2 border-gray-400"
        ></img>
        <p className="z-10 left-1/4 top-8 md:left-1/3 font-bold text-white text-lg md:text-2xl absolute">
          {date}
        </p>
        <p
          className={`font-bold text-xl text-white z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
            showView ? "block" : "hidden"
          }`}
        >
          View
        </p>
      </a>
    </div>
  );
};

export default Album;
