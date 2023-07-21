import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaTwitterSquare,
  FaAngleUp,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="w-[90vw] h-fit grid grid-cols-1 xl:grid-cols-3 pb-28 mx-auto gap-x-40 pt-28  gap-y-10">
      <div className="flex flex-col gap-14 w-full ">
        <img
          src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689939043/Layer_4_zbghnc.png"
          className="w-[75%] h-40 "
          alt="logo"
        ></img>
        <p className=" text-white font-lato text-xl 2xl:text-3xl font-semibold 2xl:leading-[43px] 2xl:tracking-[-0.9px] text-justify w-[80%]">
          Copyright ©2 023. Jhumpa. All rights reserved.
        </p>
      </div>

      <div className="flex flex-col w-full pt-10">
        <div className="pb-10 text-left flex flex-col gap-2 text-white font-lato">
          <h1 className="text-3xl 2xl:text-5xl font-bold leading-[43px] tracking-[-1.44px] ">
            Contact us
          </h1>
          <p className="text-xl 2xl:text-3xl font-semibold 2xl:leading-[43px] 2xl:tracking-[-0.9px]">
            jhumpa.cosmetic@gmail.com
          </p>
          <p className="text-xl 2xl:text-3xl font-semibold 2xl:leading-[43px] 2xl:tracking-[-0.9px]">
            Phone no.- 7205608242
          </p>
        </div>

        <div className="flex gap-7 justify-start text-white">
          <FaInstagramSquare className="w-12 h-12" />
          <FaLinkedin className="w-12 h-12" />
          <FaTwitterSquare className="w-12 h-12" />
          <FaFacebookSquare className="w-12 h-12" />
        </div>
      </div>

      <div className="flex pt-10 justify-between w-full relative ">
        <div className="text-white  text-left font-lato 2xl:leading-[43px] 2xl:tracking-[-0.9px]">
          <h1 className="text-3xl 2xl:text-4xl font-bold tracking-[-1.44px] pb-4 w-2/3">
            Manufactured & Marketed by
          </h1>
          <div className="flex flex-col gap-y-2 text-xl 2xl:text-3xl font-semibold ">
            <p>JHUMPA HERBAL COSMETICS</p>
            <p>Soumya Ranjan Bharati</p>
            <p>At - Stadium road, Post - Ferrochrome,</p>
            <p>Dist - Jajpur, Pin - 755020, State - Odisha</p>
          </div>
        </div>
        <div className="absolute right-2 w-12 h-12 bg-white rounded-full flex justify-center items-center">
          <FaAngleUp className="text-black" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
