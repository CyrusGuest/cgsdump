import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <h1 className="md:max-w-2xl max-w-sm mx-auto mt-20 md:mt-28 text-center text-4xl md:text-6xl font-bold">
        your <span className="text-gradient font-bold">one-stop-shop</span> for
        everything lawncare related
      </h1>
      <h3 className="mt-8 md:max-w-2xl max-w-md mx-auto text-xl md:text-2xl text-[#999999] text-center">
        Lawncare solutions, tailored personally to your home.
      </h3>
      <div className="flex justify-center mt-10 space-x-6">
        <Link to="/packages">
          <button className="text-xl md:text-2xl btn text-white bg-primary">
            our packages
          </button>
        </Link>
        <Link to="/getstarted">
          <button className="text-xl btn md:text-2xl btn shadow-lg bg-accent">
            contact us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
