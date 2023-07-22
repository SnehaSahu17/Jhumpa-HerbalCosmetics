import React from "react";

function Aboutus() {
  return (
    <div name="aboutus" className="pb-10 md:pb-40 md:pt-0">
      <div className="w-[90vw] h-fit  flex flex-col justify-start items-center mx-auto">
        <p className="text-black font-lato text-3xl md:text-7xl 2xl:text-9xl font-bold ">
          Meet the <span className="text-[#318458] ">Herbal</span> team
        </p>
        <div className="md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-24 xl:gap-x-44 gap-y-10 mx-auto">
          <img
            src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689962033/Asset_4_4x_swflwi.png"
            className="w-64 h-[450px] 2xl:w-[345px] 2xl:h-[627px]"
            alt="aboutus"
          ></img>

          <img
            src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689962033/Asset_3_4x_sxzf8u.png"
            className="w-64 h-[450px] 2xl:w-[345px] 2xl:h-[627px]"
            alt="aboutus"
          ></img>
        </div>
        <p className="text-black mt-10 md:mt-24 text-justify md:text-center text-lg sm:text-xl font-lato font-thin w-[90%] ">
          Welcome to our herbal hair oil company, where nature meets beauty. We
          are passionate about providing natural hair care solutions that
          promote healthy and gorgeous hair. With our expertise in herbal
          formulations, we offer products crafted with love and care, ensuring
          your hair receives the nourishment it deserves. Discover the magic of
          our herbal hair oil today.
        </p>
      </div>
    </div>
  );
}

export default Aboutus;
