import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import Sidebar from "./Sidebar";


function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <div className="w-full h-40 bg-[#1A1A1A] webColor fixed ">
      <div className="w-full h-32 navbar px-32 pt-5 ">
        <div className="w-full h-24 webColor inline-flex items-center justify-between">
          <div className="flex justify-center items-center gap-14 navFont  ">
            <div>
              <img
                src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689879606/Layer_4_nmkspq.png"
                className="cursor-pointer w-52"
              ></img>
            </div>
            <div className="cursor-pointer">Home</div>
            <div className="cursor-pointer">Products</div>
            <div className="cursor-pointer">Investor</div>
            <div className="cursor-pointer">About Us</div>
          </div>

          <button className="w-44 h-12 bg-[#318458] rounded-3xl">
            <p className="buynow">BUY NOW</p>
          </button>

          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
