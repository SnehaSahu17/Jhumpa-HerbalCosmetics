import React from 'react'

function Details() {
  return (
    <div className=" h-fit  flex flex-col items-center justify-center font-lato py-10 md:py-32">
      <img
        src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689919648/Layer_1_fsrrzt.png"
        className="md:w-3/5 "
        alt="HerbalLady"
      ></img>
      <h1 className=" mt-8 font-lato text-black text-lg md:text-4xl xl:text-6xl font-semibold sm:font-medium ">
        ayurvedic
        <span className="text-[#318458] text-2xl md:text-5xl xl:text-7xl font-extrabold ">
          &nbsp;Jhumpa&nbsp;
        </span>
        herbal cosmetics
      </h1>
      <p className="xl:w-[70%] text-black text-xl font-thin  text-justify sm:text-center pt-4 pb-10">
        We craft natural herbal cosmetics, harnessing the power of botanicals.
        Our products enhance your beauty while nurturing your skin, leaving you
        with a radiant, healthy, and naturally glowing complexion.
      </p>
      <button type="submit" className="w-56 h-14 bg-[#318458] rounded-full hover:scale-105 duration-200">
        <p className="text-white text-center font-bold text-xl ">
          BUY NOW
        </p>
      </button>
    </div>
  );
}

export default Details