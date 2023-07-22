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
    <div className="w-[90vw] h-fit grid grid-cols-1 xl:grid-cols-3 pb-20 mx-auto gap-x-40 pt-16  gap-y-10">
      <div className="flex flex-col gap-14 w-full ">
        <img
          src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689939043/Layer_4_zbghnc.png"
          className="w-[85%] h-32 "
          alt="logo"
        ></img>
        <p className=" text-white font-lato text-xl  font-medium  text-justify w-[80%]">
          Copyright ©2023.Jhumpa. All rights reserved.
        </p>
      </div>

      <div className="flex flex-col w-full pt-10">
        <div className="pb-10 text-left flex flex-col gap-1 text-white font-lato">
          <h1 className="text-4xl font-medium ">Contact us</h1>
          <p className="text-xl font-medium ">jhumpa.cosmetic@gmail.com</p>
          <p className="text-xl font-medium ">Phone no.- 7205608242</p>
        </div>

        <div className="flex gap-5 justify-start text-white">
          <FaInstagramSquare className="w-10 h-10" />
          <FaLinkedin className="w-10 h-10" />
          <FaTwitterSquare className="w-10 h-10" />
          <FaFacebookSquare className="w-10 h-10" />
        </div>
      </div>

      <div className="flex pt-10 justify-between w-full relative font-lato ">
        <div className="text-white  text-left font-lato 2xl:leading-[43px] 2xl:tracking-[-0.9px]">
          <h1 className="text-3xl font-medium  pb-4 w-2/3">
            Manufactured & Marketed by
          </h1>
          <div className="flex flex-col gap-y-1 text-lg font-smedium">
            <p>JHUMPA HERBAL COSMETICS</p>
            <p>Soumya Ranjan Bharati</p>
            <p>At - Stadium road, Post - Ferrochrome,</p>
            <p>Dist - Jajpur, Pin - 755020, State - Odisha</p>
          </div>
        </div>
        <div className="absolute right-2 w-10 h-10 bg-white rounded-full flex justify-center items-center">
          <FaAngleUp className="text-black" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
