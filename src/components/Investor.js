import React from "react";

function Investor() {
  return (
    <div name="investor" className="py-10 md:pb-40 md:pt-0">
      <div className="w-[90vw] h-fit  flex flex-col justify-start items-center mx-auto">
        <div className="bg-[#318458] rounded-full w-full lg:w-1/3 h-10 flex justify-center items-center">
          <h1 className="text-white font-lato font-semibold text-sm md:text-lg 2xl:text-2xl px-auto ">
            GET HERBAL WITH OUR STARTUP
          </h1>
        </div>

        <div className="text-black font-lato pt-4 md:pt-12 text-4xl md:text-7xl 2xl:text-8xl font-bold ">
          <h1>Investing in Jhumpa</h1>
        </div>

        <p className="text-black text-justify md:text-center text-xl font-thin font-lato pt-4 md:pt-8 md:w-[72%]">
          Invest with us and be part of our herbal hair oil company's journey.
          Benefit from the rising demand for natural beauty products and join us
          in redefining the industry.
        </p>

        <h1 className="text-black font-lato pt-4 md:pt-8 text-4xl md:text-5xl font-semibold leading-[82px] ">
          Why to Invest?
        </h1>

        <div className="pt-4 md:pt-8 flex flex-col justify-center items-center gap-y-10">
          <p className="text-black text-justify md:text-center  text-xl font-lato font-thin  md:w-[90%]">
            Investing in our herbal hair oil company offers a promising
            opportunity in the growing natural beauty market. With our
            high-quality products, commitment to sustainability, and rising
            consumer demand for organic hair care, you can capitalize on the
            potential for long-term growth and financial success. Join us on
            this rewarding investment journey today.{" "}
          </p>
          <button className="w-44 h-12 md:w-56 md:h-14 bg-[#F16521] rounded-full hover:scale-105 duration-200">
            <p className="text-white text-center font-bold text-lg font-lato">
              CONTACT US
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Investor;
