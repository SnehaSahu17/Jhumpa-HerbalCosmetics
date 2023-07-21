import React from 'react'

function Card() {
  return (
    <div className=" w-full h-fit mt-10 md:mt-16 relative mx-auto ">
      <div className="card  rounded-3xl">
        <img
          src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689917163/Firefly_Inpaint_20230717201238_1_t2bpnj.png"
          className=" rounded-3xl w-full h-full  "
          alt="hero-card"
        ></img>
      </div>

      <div className="absolute top-[15%] md:top-[35%] xl:top-[40%]  flex flex-col text-[#FFFFFF] w-3/5 ml-10 lg:ml-28">
        <h1 className="text-white font-lato text-xs md:text-3xl 2xl:text-4xl font-semibold ">
          Ayurvedic
        </h1>
        <p className="text-white font-lato w-3/5 xl:w-1/2  2xl:w-3/5 font-extrabold text-xl md:text-6xl 2xl:text-8xl lg:mt-2">
          Mixed Herb Hair Oil
        </p>
        <button className="2xl:w-72 2xl:h-20 w-24 h-7 sm:w-44 sm:h-12 bg-[#F16521] rounded-full sm:mt-4 xl:mt-14 hover:scale-105 duration-200">
          <p className="text-white text-center font-bold text-sm sm:text-lg  2xl:text-3xl font-sans ">
            BUY NOW
          </p>
        </button>
      </div>
    </div>
  );
}

export default Card