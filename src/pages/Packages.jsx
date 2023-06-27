import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import MobileNav from "../components/MobileNav";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PackageCard from "../components/PackageCard";
import CodeGraphic from "../../images/codegraphic.svg";
import LandingGraphic from "../components/LandingGraphic";

const Packages = () => {
  let { MobileNavOpen } = useContext(AppContext);

  return (
    <div className="font-Poppin dark:bg-brand-secondary transition-all">
      {MobileNavOpen ? <MobileNav /> : ""}

      <div className={MobileNavOpen ? "opacity-50" : "opacity-100"}>
        <Navbar />

        <h1 className="text-gradient text-center text-5xl text-primary font-bold mt-20">
          Our Packages
        </h1>

        <p className="text-center mx-auto text-slate-600 max-w-sm md:max-w-2xl mt-2">
          Welcome to our Packages page, where we've curated a selection of
          lawncare solutions for a simple checkout.
        </p>

        <div className="flex flex-wrap justify-center max-w-6xl mx-auto gap-y-12 my-20">
          <PackageCard packageType="basic" />
          <PackageCard packageType="premium" />
          <PackageCard packageType="standard" />
        </div>

        <LandingGraphic />

        <Footer />
      </div>
    </div>
  );
};

export default Packages;
