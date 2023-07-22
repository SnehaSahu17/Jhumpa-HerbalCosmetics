import React from "react";

function Banner() {
  return (
    <div className="w-full grid grid-col-1 md:grid-cols-3 gap-x-2 gap-y-10 pt-10 md:pb-32 md:pt-0 font-lato ">
      <div className=" w-full h-fit flex flex-col justify-center items-center">
        <img
          src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689921949/Isolation_Mode_egzvad.png"
          alt="no toxin chemicals"
          className="w-36 h-36"
        ></img>
        <h1 className="py-4 text-[#318458] text-center text-4xl sm:text-2xl xl:text-4xl font-bold font-lato">
          NO TOXIN CHEMICALS
        </h1>
        <p className="text-black text-justify sm:text-center text-md sm:text-xl  font-thin tracking-[-0.9px] xl:w-3/5 ">
          Nourishes, strengthens, and restores hair naturally
        </p>
      </div>

      <div className="w-full h-fit flex flex-col justify-center items-center">
        <img
          src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689921949/Isolation_Mode_1_oz1hjm.png"
          alt="organic"
          className="w-36 h-36"
        ></img>
        <h1 className="py-4 text-[#318458] text-center text-4xl sm:text-2xl xl:text-4xl font-bold font-lato">
          100% ORGANIC
        </h1>
        <p className="text-black text-justify sm:text-center text-md sm:text-xl  font-thin tracking-[-0.9px] xl:w-3/5 ">
          Nourishes, strengthens, and restores hair naturally
        </p>
      </div>
      <div className="w-full h-fit flex flex-col justify-center items-center">
        <img
          src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689921949/Isolation_Mode_2_nh8ssh.png"
          alt="no mineral oil"
          className="w-36 h-36"
        ></img>
        <h1 className="py-4 text-[#318458] text-center text-4xl sm:text-2xl xl:text-4xl font-bold font-lato">
          NO MINERAL OIL
        </h1>
        <p className="text-black text-justify sm:text-center text-md sm:text-xl  font-thin tracking-[-0.9px] xl:w-3/5 ">
          Nourishes, strengthens, and restores hair naturally
        </p>
      </div>
    </div>
  );
}

export default Banner;
