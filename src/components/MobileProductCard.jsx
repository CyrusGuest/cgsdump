import React from "react";
import { Link } from "react-router-dom";
import piechart from "../../images/piechart.svg";
import brand from "../../images/brand.svg";

const ProductCard = ({ topCard }) => {
  if (topCard) {
    return (
      <div className="font-Poppins flex-col text-white md:mx-auto md:my-2 md:w-9/12 w-11/12 py-6 px-6 flex md:flex-row bg-primary rounded-lg drop-shadow-lg mt-14">
        <img
          className="w-3/5 md:w-1/5 py-10 md:py-0 mx-auto md:max-w-xs"
          src={piechart}
        />

        <div className="md:ml-5 max-w-lg">
          <h3 className="font-bold">Ad Integration</h3>
          <p>
            Enable your website with ads to monetize your content and introduce
            new cash-flow to your business.
          </p>

          <div className="flex flex-col md:flex-row gap-2">
            <h1 className="text-xl mt-4">
              <span className="font-bold">$499/mo</span> or
            </h1>

            <Link
              to="/getstarted"
              className="btn bg-white text-primary mt-2 md:text-base  text-center text-2xl"
            >
              Get quote
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-Poppins glow-on-hover bg-accent text-white md:mx-auto md:ml-32 md:my-2 md:w-9/12 w-11/12 py-6 px-6 flex reverse-bg-primary rounded-lg shadow-lg mt-14">
      <div className="ml-5 max-w-md">
        <h3 className="font-bold">Brand Management</h3>
        <p>
          Allow us to create, manage, and market your business' brand for you.
          As experts in the business, we deliver modern and tailored marketing
          solutions to our clients.
        </p>

        <div className="flex gap-2">
          <h1 className="text-xl mt-4">
            <span className="font-bold">$1999/mo</span> or
          </h1>

          <Link
            to="/getstarted"
            className="mt-2 flex mx-0 py-0 text-black btn bg-white"
          >
            <span className="text-accent">get quote</span>
          </Link>
        </div>
      </div>

      <img className="w-1/5 mx-auto md:max-w-xs" src={brand} />
    </div>
  );
};

export default ProductCard;
