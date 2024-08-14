import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import menuDots from "../../images/menu-dots.svg";

const Navbar = () => {
  let { MobileNavOpen, setMobileNavOpen } = useContext(AppContext);

  return (
    <div className="flex">
      <Link to="/">
        <div className="flex mt-6 ml-4 w-44 md:w-64">
          <h1 className="font-bold text-4xl text-primary">cgsdump.org</h1>
        </div>
      </Link>

      <div className="my-auto mt-4 ml-auto hidden md:inline">
        <ul className="flex gap-6 mr-6 text-2xl font-bold ">
          <li className="my-auto hover:-rotate-6 hover:text-3xl duration-200">
            <Link to="/contactme">contact me</Link>
          </li>
          {/* <li className="my-auto hover:rotate-6 hover:text-3xl duration-200">
            <Link to="/casestudies">Case studies</Link>
          </li> */}
          <Link to="/photos">
            <li className="my-auto cursor-pointer btn bg-primary text-white glow-on-hover shadow-lg py-2 mt-1 px-6 font-semibold rounded-md transition duration-300">
              view photos
            </li>
          </Link>
        </ul>
      </div>
      <img
        onClick={() => setMobileNavOpen(!MobileNavOpen)}
        src={menuDots}
        alt=""
        className="my-auto ml-auto mr-4 float-right cursor-pointer md:hidden"
      />
    </div>
  );
};

export default Navbar;
