import React from 'react'

function Card() {
  return (
    <div className=" w-full h-[95vh]  mt-16 relative mx-auto ">
      <div className="card">
        <img
          src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689917163/Firefly_Inpaint_20230717201238_1_t2bpnj.png"
          className="rounded-3xl w-full h-full"
        ></img>
      </div>

      <div className="absolute top-[15%] flex flex-col text-[#FFFFFF] w-3/5 ml-28">
        <h1 className="text-white font-lato text-4xl font-semibold leading-[89.617px]">
          Ayurvedic
        </h1>
        <p className="text-white font-lato font-extrabold text-8xl leading-[96.065px]">
          Mixed Herb Hair Oil
        </p>
        <button className="w-72 h-20 bg-[#F16521] rounded-full mt-14">
          <p className="text-white text-center font-bold text-3xl font-sans ">
            BUY NOW
          </p>
        </button>
      </div>
    </div>
  );
}

export default Card