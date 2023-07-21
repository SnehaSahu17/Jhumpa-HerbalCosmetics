import React from "react";

function Banner() {
  return (
    <div className="grid grid-col-1 md:grid-cols-3 gap-32 pt-10 md:pb-40 md:pt-0">
      <div className=" w-full h-fit flex flex-col justify-center items-center">
        <img src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689921949/Isolation_Mode_egzvad.png"></img>
        <h1 className="py-4 text-[#318458] text-center text-5xl font-bold leading-[50px] tracking-[-0.5px]">
          NO TOXIN CHEMICALS
        </h1>
        <p className="text-black text-center text-3xl sm:text-xl xl:text-3xl font-normal tracking-[-0.9px] xl:w-4/5 2xl:w-3/5">
          Nourishes, strengthens, and restores hair naturally
        </p>
      </div>

      <div className="w-full h-fit flex flex-col justify-center items-center">
        <img src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689921949/Isolation_Mode_1_oz1hjm.png"></img>
        <h1 className="py-4 text-[#318458] text-center text-5xl font-bold tracking-[-0.5px]">
          100% ORGANIC
        </h1>
        <p className="text-black text-center text-3xl sm:text-xl xl:text-3xl font-normal tracking-[-0.9px] xl:w-4/5 2xl:w-3/5">
          Nourishes, strengthens, and restores hair naturally
        </p>
      </div>
      <div className="w-full h-fit flex flex-col justify-center items-center">
        <img src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689921949/Isolation_Mode_2_nh8ssh.png"></img>
        <h1 className="py-4 text-[#318458] text-center text-5xl font-bold tracking-[-0.5px]">
          NO MINERAL OIL
        </h1>
        <p className="text-black text-center text-3xl sm:text-xl xl:text-3xl font-normal tracking-[-0.9px] xl:w-4/5 2xl:w-3/5">
          Nourishes, strengthens, and restores hair naturally
        </p>
      </div>
    </div>
  );
}

export default Banner;
