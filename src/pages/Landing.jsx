import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import MobileNav from "../components/MobileNav";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import BarCarousel from "../components/BarCarousel";
import LandingGraphic from "../components/LandingGraphic";
import DataGraphic from "../components/DataGraphic";

const Landing = () => {
  let { MobileNavOpen } = useContext(AppContext);

  return (
    <div className="font-Poppin dark:bg-brand-secondary transition-all">
      {MobileNavOpen ? <MobileNav /> : ""}

      <div className={MobileNavOpen ? "opacity-50" : "opacity-100"}>
        <Navbar />

        <Hero />

        <LandingGraphic />

        <BarCarousel />

        <DataGraphic />

        {/* <Explore />

        <DesktopExplore /> */}

        <Footer />
      </div>
    </div>
  );
};

export default Landing;
