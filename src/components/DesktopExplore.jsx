import React from "react";
import { Link } from "react-router-dom";
import MobileProductCard from "./MobileProductCard";

const DesktopExplore = () => {
  return (
    <div className="hidden md:flex py-20 pl-6">
      <div className="my-auto max-w-3xl w-2/5 mx-auto">
        <h1 className="text-5xl md:text-4xl lg:text-5xl leading-normal mr-4">
          Explore all the{" "}
          <span className="font-bold text-gradient">different advertising</span>{" "}
          and brand services we offer.
        </h1>
        <h3 className="text-2xl leading-normal text-[#999999] mr-16 mt-8">
          Social media, advertisement, and more! We've got it all.
        </h3>

        <Link to="/packages">
          <button className="text-2xl btn mt-8 bg-primary text-white glow-on-hover">
            view more packages
          </button>
        </Link>
      </div>
      <div className="mx-auto flex flex-col justify-center">
        <MobileProductCard topCard={true} />
        <MobileProductCard />
      </div>
    </div>
  );
};

export default DesktopExplore;
