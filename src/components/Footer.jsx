import React from "react";
import { Link } from "react-router-dom";
import pinterestLogo from "../../images/white/pinterest.svg";
import twitterLogo from "../../images/white/twitter.svg";
import instaLogo from "../../images/white/insta.svg";

const Footer = () => {
  return (
    <div className="px-6 pt-6 pb-10 mt-10 flex flex-col lg:flex-row bg-primary">
      <div className="my-8 flex">
        <div className="mr-16">
          <h1 className="text-4xl font-bold text-white ">menu</h1>
          <ul>
            {/* <Link to="/aboutus">
              <li className="text-xl text-white cursor-pointer mt-2">
                about us
              </li>
            </Link> */}
            <Link to="/photos">
              <li className="text-xl text-white cursor-pointer mt-2">photos</li>
            </Link>
            <Link to="/contactme">
              <li className="text-xl text-white cursor-pointer mt-2">
                contact me
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="lg:my-8 mt-10">
        <h1 className="text-4xl font-bold text-white ">socials</h1>
        <ul className="mt-2 flex gap-2">
          <img
            className="cursor-pointer hover:rotate-45 duration-200 w-14"
            src={twitterLogo}
            alt=""
          />
          <img
            className="cursor-pointer hover:rotate-180  duration-200"
            src={pinterestLogo}
            alt=""
          />
          <img
            className="cursor-pointer hover:-rotate-45 duration-200 w-14"
            src={instaLogo}
            alt=""
          />
        </ul>
      </div>
    </div>
  );
};

export default Footer;
