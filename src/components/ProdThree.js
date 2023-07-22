import React from 'react'

function ProdThree() {
  return (
    <div className="pb-10 md:pt-0 md:pb-40">
      <div className="w-[90vw] h-fit grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 mx-auto rounded-3xl border-solid border-white border-2 products lg:pl-32 lg:pr-4 px-2 py-10 xl:py-24">
        <div className="bg-[#F4F5EC] relative rounded-full p-8 md:p-0 my-10 sm:my-auto h-80 xl:h-[500px] 2xl:h-[594px] w-80 xl:w-[500px] 2xl:w-[594px] mx-auto">
          <div className=" ml-28 xl:ml-44 w-1/5 h-80 xl:h-[500px] 2xl:h-[594px] bg-[#237B14]  blur-[47px]"></div>
          <img
            src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689970519/image-removebg-preview_1_-D9rpECpiN-transformed_1_y5islv.png"
            className=" w-[72%] xl:w-[75%]   absolute -top-20 xl:-top-32 2xl:-top-36 left-14 xl:left-24   mx-auto z-10 blur-0"
            alt="prodOne"
          ></img>
        </div>
        <div className="flex flex-col items-start justify-center md:py-10 ">
          <h1 className="text-black mx-auto md:mx-0 font-lato text-3xl font-medium">
            natural
          </h1>
          <h1 className="text-black mx-auto md:mx-0 font-lato text-5xl sm:text-7xl font-bold ">
            Moringa leaves
          </h1>
          <img
            src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689970518/herbal_tkfdil.png"
            className="mx-auto md:mx-0 w-40"
            alt="prodOne"
          ></img>

          <p className="text-black text-xl  text-justify md:text-left font-thin font-lato mt-4 ">
            Discover the transformative power of our Mixed Herb Herbal Hair Oil.
            Enriched with a blend of potent herbs, it revitalizes and nourishes
            your hair, promoting strength, shine, and overall hair health.
            Experience the beauty of nature in every drop.
          </p>
          <button className="w-44 h-12 bg-[#318458] rounded-full hover:scale-105 duration-200 mx-auto md:mx-0 mt-4">
            <p className="text-white text-center font-bold text-lg font-lato">
              BUY NOW
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProdThree