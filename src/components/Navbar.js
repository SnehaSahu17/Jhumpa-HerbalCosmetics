import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <div className="w-full h-24 navbar px-4 xl:px-20 py-2 ">
      <div className="w-full h-20 webColor items-center justify-between hidden md:inline-flex">
        <div className="flex justify-center items-center md:gap-12  font-medium text-md text-black font-lato tracking-[-0.63px] ">
          <div>
            <a href="\">
              <img
                src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689879606/Layer_4_nmkspq.png"
                className="cursor-pointer w-44"
                alt="logo"
              ></img>
            </a>
          </div>

          <div className="cursor-pointer hover:scale-110 duration-200">
            <Link onClick={() => setNav(!nav)} to="home" smooth duration={800}>
              Home
            </Link>
          </div>

          <div className="cursor-pointer hover:scale-110 duration-200">
            <Link
              onClick={() => setNav(!nav)}
              to="products"
              smooth
              duration={800}
            >
              Products
            </Link>
          </div>

          <div className="cursor-pointer hover:scale-110 duration-200">
            <Link
              onClick={() => setNav(!nav)}
              to="investor"
              smooth
              duration={800}
            >
              Investor
            </Link>
          </div>
          <div className="cursor-pointer hover:scale-110 duration-200">
            <Link
              onClick={() => setNav(!nav)}
              to="aboutus"
              smooth
              duration={800}
            >
              About Us
            </Link>
          </div>
        </div>

        <button className="w-36 h-10 bg-[#318458] rounded-full hover:scale-105 duration-200">
          <p className="text-white text-center font-bold text-sm font-lato">
            BUY NOW
          </p>
        </button>
      </div>
      <div className="w-full h-28 webColor items-center justify-between md:hidden inline-flex">
        <img
          src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689879606/Layer_4_nmkspq.png"
          className="cursor-pointer w-44"
          alt="logo"
        ></img>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer text-black z-10 "
        >
          {nav ? (
            <>
              <FaTimes size={40} />
              <Sidebar />
            </>
          ) : (
            <FaBars size={40} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
