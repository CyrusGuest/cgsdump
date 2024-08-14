import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <h1 className="md:max-w-2xl max-w-sm mx-auto mt-20 md:mt-28 text-center text-4xl md:text-6xl font-bold">
        view and download <span className="text-gradient font-bold">every</span>{" "}
        picture of mine
      </h1>
      <h3 className="mt-8 md:max-w-2xl max-w-md mx-auto text-xl md:text-2xl text-[#999999] text-center">
        Download and use my pictures for free. No need to credit me but I do
        appreciate it!
      </h3>
      <div className="flex justify-center mt-10 space-x-6">
        <Link to="/photos">
          <button className="text-xl md:text-2xl btn text-white bg-primary">
            view photos
          </button>
        </Link>
        <Link to="/contactme">
          <button className="text-xl btn md:text-2xl btn shadow-lg bg-accent">
            contact me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
