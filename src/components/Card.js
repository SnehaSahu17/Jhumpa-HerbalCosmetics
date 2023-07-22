import React from "react";

function Card() {
  return (
    <div className="bg-[url('https://res.cloudinary.com/dkqxnquga/image/upload/v1689917163/Firefly_Inpaint_20230717201238_1_t2bpnj.png')] bg-no-repeat bg-cover bg-center w-full  rounded-3xl mt-10 md:mt-16">
      <div className="card rounded-3xl bg-no-repeat w-full bg-cover bg-center">
        <div className="flex flex-col  items-start text-[#FFFFFF] w-3/5 mx-auto lg:ml-24 pb-10 sm:pb-16 ">
          <h1 className="text-white font-lato text-xs md:text-3xl 2xl:text-4xl font-medium pt-10 md:pt-56">
            Ayurvedic
          </h1>

          <p className="text-white font-lato w-3/5 xl:w-3/5 font-extrabold text-xl md:text-7xl  lg:mt-2">
            Mixed Herb Hair Oil
          </p>

          <button
            type="submit"
            className="w-24 h-7 sm:w-56 sm:h-16 bg-[#F16521] rounded-full mt-4 xl:mt-12  hover:scale-105 duration-200 "
          >
            <p className="text-white text-center font-bold text-xs sm:text-xl font-lato">
              BUY NOW
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
