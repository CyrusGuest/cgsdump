import React from "react";
import { Link } from "react-router-dom";
import DataImage from "../../images/maingraphic.svg";

const DataGraphic = () => {
  return (
    <div className="mb-36 md:mb-16 mt-20 flex flex-col lg:flex-row-reverse gap-8 lg:gap-16">
      <img
        className="mx-auto w-4/5 lg:w-3/5 max-w-2xl lg:mt-20 lg:mb-40 flex"
        src={DataImage}
      />

      <div className="lg:ml-20 flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl md:text-5xl text-gradient font-bold">
          Why Mike's?
        </h1>

        <div className="max-w-xs md:max-w-2xl mt-4">
          <p className="text-center mx-auto mt-2 md:mt-6 md:text-xl">
            Meet the Gold Standard in Lawn Care - Mike's Lawncare. We're not
            just a lawn care service; we're a team of dedicated professionals
            who are passionate about bringing out the natural beauty in every
            lawn. Each blade of grass under our care is treated with precision
            and respect, resulting in a lawn that speaks volumes about the love
            and attention we put into our work.
          </p>

          <p className="text-center mx-auto mt-2 md:mt-6 md:text-xl">
            Our customer satisfaction rate, a proud
            <span className="font-bold text-gradient"> 98%</span>, isn't just a
            number to us - it reflects the trust homeowners have in our
            commitment to excellence. And we never stop striving to improve.
            Backed by the latest in lawn care technology and a ceaseless desire
            to innovate, we're on a mission to make every lawn we touch a green
            masterpiece.
          </p>

          <p className="text-center mx-auto mt-2 md:mt-6 md:text-xl">
            With Mike's Lawncare, it's not just about cutting grass, it's about
            crafting landscapes. Let us transform your yard into a lush, green
            sanctuary you'll be proud to call home.
          </p>
        </div>

        <Link
          to="/getstarted"
          className="text-center btn w-72 font-bold bg-primary rounded-lg shadow-lg text-white glow-on-hover mt-10 text-2xl mx-auto"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default DataGraphic;
