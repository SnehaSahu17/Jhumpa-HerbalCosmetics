import React from "react";
import Card from "./Card";
import Details from "./Details";
import Banner from "./Banner";

import { HiSearch } from "react-icons/hi";

function Home() {
  return (
    <div
      name="home"
      className="h-fit flex flex-col justify-center items-center pt-14"
    >
      {/* Searchbar */}
      <div className="relative w-[90vw] lg:w-[55vw] 2xl:w-1/3 h-16 bg-[#173D28] rounded-full flex justify-between items-center">
        <input
          type="search"
          placeholder="Search by hair oil, face wash, serum, sampoo..."
          className="text-[#A8A8A8] w-4/5 sm:w-full text-xs sm:text-lg font-medium tracking-widest font-jakarta ml-4 outline-none bg-[#173D28] "
        />
        <button
          type="submit"
          className="bg-[#248F54] w-14 h-14 rounded-full mr-1.5 flex justify-center items-center hover:scale-95 duration-150"
        >
          <HiSearch className="text-white w-6 h-6 " />
        </button>
      </div>

      {/* card details banner*/}
      <div className="w-[90vw]">
        <Card />
        <Details />
        <Banner />
      </div>
    </div>
  );
}

export default Home;
