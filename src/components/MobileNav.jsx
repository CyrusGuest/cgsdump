import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import arrow from "../../images/arrow.svg";
import logo from "../../images/logo.svg";
import menuDots from "../../images/menu-dots.svg";

const MobileNav = () => {
  let { setMobileNavOpen } = useContext(AppContext);

  return (
    <div className="fixed z-20 w-3/4 h-full bg-white right-0">
      <div className="flex mt-4">
        <img
          onClick={() => setMobileNavOpen(false)}
          src={arrow}
          alt=""
          className="cursor-pointer mr-8 mt-2"
        />
        <p className="cursor-pointer text-primary font-bold text-lg mx-auto w-28 mt-4">
          cgsdump.org
        </p>
        <img
          onClick={() => setMobileNavOpen(false)}
          src={menuDots}
          alt=""
          className="cursor-pointer ml-auto mr-4 mt-4"
        />
      </div>

      <div className="flex flex-col ml-6 mt-10 gap-10">
        <ul className="text-2xl ">
          <h1 className="font-bold text-5xl text-gradient">menu</h1>
          <Link onClick={() => setMobileNavOpen(false)} to="/">
            <h4 className="mt-1">home</h4>
          </Link>
          <Link onClick={() => setMobileNavOpen(false)} to="/photos">
            <h4 className="mt-1">photos</h4>
          </Link>
        </ul>
        {/* 
        <ul className="text-2xl ">
          <h1 className="font-bold text-5xl text-gradient">company</h1>
          <Link onClick={() => setMobileNavOpen(false)} to="/aboutus">
            <h4 className="mt-1">about us</h4>
          </Link>
          <Link onClick={() => setMobileNavOpen(false)} to="/casestudies">
            <h4 className="mt-1">case studies</h4>
          </Link>
          <Link onClick={() => setMobileNavOpen(false)} to="/policy">
            <h4 className="mt-1">policy</h4>
          </Link>
        </ul> */}

        <Link
          onClick={() => setMobileNavOpen(false)}
          className="text-white glow-on-hover-fixed mx-auto fixed bottom-10 w-8/12 text-3xl text-center cursor-pointer drop-shadow-lg py-3 bg-primary px-6 font-semibold rounded-md transition duration-300"
          to="/contactme"
        >
          contact us
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
