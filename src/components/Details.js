import React from 'react'

function Details() {
  return (
    <div className=" h-fit  flex flex-col items-center justify-center ">
      <img
        src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689919648/Layer_1_fsrrzt.png"
        className="w-3/5 "
      ></img>
      <h1 className="mt-12 font-lato text-black text-7xl font-medium leading-[82px] tracking-[-2.7px]">
        ayurvedic
        <span className="text-[#318458] text-9xl font-extrabold tracking-[-3.3px] ">
          &nbsp;Jhumpa&nbsp;
        </span>
        herbal cosmetics
      </h1>
      <p className="w-[78%] text-black text-3xl font-normal tracking-[-0.9px] text-center leading-[43px] pt-4 pb-10">
        We craft natural herbal cosmetics, harnessing the power of botanicals.
        Our products enhance your beauty while nurturing your skin, leaving you
        with a radiant, healthy, and naturally glowing complexion.
      </p>
      <button className="w-64 h-16 bg-[#318458] rounded-full">
        <p className="text-white text-center font-bold text-2xl font-sans">
          BUY NOW
        </p>
      </button>
    </div>
  );
}

export default Details