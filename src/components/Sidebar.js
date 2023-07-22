import React from "react";

const Sidebar = () => {


  return (
    <div className="absolute left-0 right-0 bottom-0 top-28 webColor w-full h-[90vh] flex flex-col justify-center items-center navFont gap-12  font-semibold text-2xl text-black font-lato tracking-[-0.63px] ">
      <div className="cursor-pointer hover:scale-110 duration-200">Home</div>
      <div className="cursor-pointer hover:scale-110 duration-200">
        Products
      </div>
      <div className="cursor-pointer hover:scale-110 duration-200">
        Investor
      </div>
      <div className="cursor-pointer hover:scale-110 duration-200">
        About Us
      </div>
      <button className="w-44 h-12 bg-[#318458] rounded-3xl hover:scale-105 duration-200">
        <p className="text-white text-center font-bold text-lg font-sans">
          BUY NOW
        </p>
      </button>
    </div>
  );
};

export default Sidebar;
