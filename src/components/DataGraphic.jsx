import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../images/hero.jpg";

const DataGraphic = () => {
  return (
    <div className="mb-36 md:mb-16 mt-20 flex flex-col lg:flex-row-reverse gap-8 lg:gap-16">
      <img
        className="mx-auto w-4/5 lg:w-3/5 max-w-2xl lg:mt-20 lg:mb-40 flex rounded-lg"
        src={Hero}
      />

      <div className="lg:ml-20 flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl md:text-5xl text-gradient font-bold">
          Who am I?
        </h1>

        <div className="max-w-xs md:max-w-2xl mt-4">
          <p className="text-center mx-auto mt-2 md:mt-6 md:text-xl">
            My name is Cyrus Guest, I'm a freshman at Framingham State
            University studying computer science. I've been passionate about
            photography for years now and I've collected well over 10,000
            photos. Each of these photos captures a special moment in my life
            and others' lives as well.
          </p>

          <p className="text-center mx-auto mt-2 md:mt-6 md:text-xl">
            I've decided that I shouldn't be the only one able to look back on
            these memories. That's why I've created this site, to share my
            photos with my friends and family. Feel free to download and use
            these photos on your social media. No need to credit me, but I do
            appreciate it alot.
          </p>

          <p className="text-center mx-auto mt-2 md:mt-6 md:text-xl">
            Thank you for visiting my site, I hope you find something that you
            love.
          </p>
        </div>

        <Link
          to="/photos"
          className="text-center btn w-72 font-bold bg-primary rounded-lg shadow-lg text-white glow-on-hover mt-10 text-2xl mx-auto"
        >
          view photos
        </Link>
      </div>
    </div>
  );
};

export default DataGraphic;
