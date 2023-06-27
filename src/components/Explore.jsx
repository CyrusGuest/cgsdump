import React from "react";
import { Link } from "react-router-dom";
import MobileProductCard from "./MobileProductCard";

const Explore = () => {
  return (
    <div className="pt-20 pl-3 pb-20 md:hidden">
      <h1 className="text-5xl mr-4">
        Explore all the different{" "}
        <span className="text-gradient font-bold">advertising</span> and{" "}
        <span className="text-gradient font-bold">brand services</span> we
        offer.
      </h1>
      <h3 className="text-3xl text-[#999999] mr-16 mt-8">
        Social media, advertisement, and more! We've got it all.
      </h3>

      <Link to="/packages">
        <button className="text-2xl btn mt-8 text-white bg-primary glow-on-hover">
          view more packages
        </button>
      </Link>

      <MobileProductCard topCard={true} />
    </div>
  );
};

export default Explore;
