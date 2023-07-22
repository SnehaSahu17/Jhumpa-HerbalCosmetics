import React from "react";

function Card() {
  return (
    <div className="bg-[url('https://res.cloudinary.com/dkqxnquga/image/upload/v1689917163/Firefly_Inpaint_20230717201238_1_t2bpnj.png')] bg-no-repeat bg-cover bg-center w-full  rounded-3xl mt-10 md:mt-16">
      <div className="card  rounded-3xl bg-no-repeat w-full bg-cover bg-center">
        <div className="flex flex-col  items-start text-[#FFFFFF] w-3/5 ml-10 lg:ml-28 pb-10 md:pb-20">
          <h1 className="text-white font-lato text-xs md:text-3xl 2xl:text-4xl font-semibold pt-10 md:pt-72">
            Ayurvedic
          </h1>

          <p className="text-white font-lato w-3/5 xl:w-1/2 2xl:w-3/5 font-extrabold text-xl md:text-6xl 2xl:text-8xl lg:mt-2">
            Mixed Herb Hair Oil
          </p>

          <button
            type="submit"
            className="2xl:w-72 2xl:h-20 w-24 h-7 sm:w-44 sm:h-12 bg-[#F16521] rounded-full sm:mt-4 xl:mt-14  hover:scale-105 duration-200 "
          >
            <p className="text-white text-center font-bold text-sm sm:text-lg  2xl:text-3xl font-sans ">
              BUY NOW
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
