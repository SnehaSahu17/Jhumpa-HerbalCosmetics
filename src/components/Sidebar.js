import React, { useState } from "react";

const Sidebar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="absolute left-0 right-0 bottom-0 top-32 webColor w-full h-[85vh] flex flex-col justify-center items-center navFont gap-14">
      <div className="cursor-pointer">Home</div>
      <div className="cursor-pointer">Products</div>
      <div className="cursor-pointer">Investor</div>
      <div className="cursor-pointer">About Us</div>
      <button className="w-44 h-12 bg-[#318458] rounded-3xl">
        <p className="buynow">BUY NOW</p>
      </button>
    </div>
  );
};

export default Sidebar;
