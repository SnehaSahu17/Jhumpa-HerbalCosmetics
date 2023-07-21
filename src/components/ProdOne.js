import React from 'react'

function ProdOne() {
  return (
    <div className="py-10 md:pt-0 md:pb-40">
      <div className="w-[90vw] h-fit grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 mx-auto">
        <img
          src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689972409/Layer_1_irbkkx.png"
          className="w-4/5 sm:w-full mx-auto " alt='prodOne'
        ></img>
        <div className="flex flex-col items-start justify-center">
          <img
            src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689970518/herbal_tkfdil.png"
            className="mx-auto md:mx-0" alt='prodOne'
          ></img>
          <h1 className="text-black mx-auto md:mx-0 font-lato text-6xl font-bold md:leading-[82px] md:tracking-[-1.1px]">
            Hair Oil
          </h1>
          <p className="text-black text-3xl text-justify md:text-left font-normal leading-[43px] tracking-[-0.9px] mt-4 ">
            Introducing our herbal hair oil, a natural blend of botanical
            extracts and oils. Nourish and rejuvenate your hair, promoting
            shine, strength, and overall hair health. Experience the magic of
            nature for beautiful tresses.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProdOne