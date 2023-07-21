import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "./Sidebar";

function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <div className="w-full h-32 navbar px-4 xl:px-32 pt-5 ">
      <div className="w-full h-24 webColor items-center justify-between hidden md:inline-flex">
        <div className="flex justify-center items-center md:gap-10 lg:gap-14 font-semibold text-xl text-black font-lato tracking-[-0.63px] ">
          <div>
            <a href="\">
              <img
                src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689879606/Layer_4_nmkspq.png"
                className="cursor-pointer w-52" alt="logo"
              ></img>
            </a>
          </div>
          <div className="cursor-pointer hover:scale-110 duration-200">
            Home
          </div>
          <div className="cursor-pointer hover:scale-110 duration-200">
            Products
          </div>
          <div className="cursor-pointer hover:scale-110 duration-200">
            Investor
          </div>
          <div className="cursor-pointer hover:scale-110 duration-200">
            About Us
          </div>
        </div>

        <button className="w-44 h-12 bg-[#318458] rounded-full hover:scale-105 duration-200">
          <p className="text-white text-center font-bold text-lg font-sans">
            BUY NOW
          </p>
        </button>
      </div>
      <div className="w-full h-24 webColor items-center justify-between md:hidden inline-flex">
        <img
          src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689879606/Layer_4_nmkspq.png"
          className="cursor-pointer w-52" alt="logo"
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
