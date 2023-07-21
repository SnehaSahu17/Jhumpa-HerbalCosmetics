import React from "react";
import Card from "./Card";
import Details from "./Details";
import Banner from "./Banner";

import { HiSearch } from "react-icons/hi";

function Home() {
  return (
    <div className="h-fit flex flex-col justify-center items-center pt-14">
      {/* Searchbar */}
      <div className="w-[90vw] lg:w-[55vw] 2xl:w-1/3 h-16 bg-[#173D28] rounded-full flex justify-between items-center">
        <p className="text-[#A8A8A8] text-xs sm:text-lg font-medium tracking-widest font-jakarta ml-4">
          Search by hair oil, face wash, serum, sampoo...
        </p>
        <button className="bg-[#248F54] w-14 h-14 rounded-full mr-1.5 flex justify-center items-center hover:scale-95 duration-150">
          <HiSearch className="text-white w-6 h-6 " />
        </button>
      </div>
      {/* card */}
      <div className="w-[90vw]">
        <Card />
        {/* Details */}
        <Details />
        <Banner />
      </div>
    </div>
  );
}

export default Home;
