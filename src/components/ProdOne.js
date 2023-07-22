import React from 'react'

function ProdOne() {
  return (
    <div className="py-10 md:pt-0 md:pb-40 max-w-7xl mx-auto">
      <div className=" h-fit grid grid-cols-1 md:grid-cols-2  gap-y-10 w-full">
        <img
          src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689972409/Layer_1_irbkkx.png"
          className="w-4/5 mx-auto " alt='prodOne'
        ></img>
        <div className="flex flex-col items-start  justify-center">
          <img
            src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689970518/herbal_tkfdil.png"
            className="mx-auto md:mx-0 w-28" alt='prodOne'
          ></img>
          <h1 className=" mx-auto md:mx-0 font-lato text-7xl font-semibold text-black ">
            Hair Oil
          </h1>
          <p className="text-black text-xl font-lato text-justify xl:text-left font-thin mt-4 w-4/5 xl:w-full mx-auto">
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