import React from "react";
import { Link } from "react-router-dom";
import MainGraphic from "../../images/data.svg";

const LandingGraphic = () => {
  return (
    <div className="mb-32 lg:mb-10 mt-20 md:mt-32 lg:mt-64 flex flex-col-reverse lg:flex-row-reverse gap-8 lg:gap-16">
      <div className="lg:mr-20 flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl md:text-5xl text-gradient font-bold">
          From Lush Greens to High Returns
        </h1>

        <div className="max-w-xs md:max-w-2xl mt-4">
          <p className="text-center mx-auto mt-2 md:mt-6 md:text-xl">
            Welcome to Mike's Lawncare, where we understand the true value of a
            well-kept lawn. According to the National Association of Realtors, a
            standard lawn care service can recover{" "}
            <span className="font-bold text-gradient">267%</span> of its cost at
            the time of sale.
          </p>

          <p className="text-center mx-auto mt-2 md:mt-6 md:text-xl">
            That's right - a beautiful lawn not only enhances your home's curb
            appeal, but it can also significantly boost your home's market
            value. Regular lawn care maintenance can contribute an astounding{" "}
            <span className="font-bold text-gradient">
              15% to a home's overall value
            </span>
            , as per a Clemson University study. At Mike's Premier Lawncare,
            we're committed to helping you invest in your property's worth.
          </p>

          <p className="text-center mx-auto mt-2 md:mt-6 md:text-xl">
            Our expertise in lawn care ensures your green spaces are not just
            lush and healthy, but a worthwhile investment that garners
            appreciating returns. Trust us to nurture your lawn, and watch your
            home value grow.
          </p>
        </div>

        <Link
          to="/getstarted"
          className="text-center btn xxw-72 font-bold bg-primary rounded-lg shadow-lg text-white glow-on-hover mt-10 text-2xl mx-auto"
        >
          Learn More
        </Link>
      </div>

      <img
        className="mx-auto w-4/5 lg:w-3/5 max-w-4xl lg:mt-20 lg:mb-40 flex"
        src={MainGraphic}
      />
    </div>
  );
};

export default LandingGraphic;
