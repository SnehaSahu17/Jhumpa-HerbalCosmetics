import React from "react";

function ProductsGrid() {
  return (
    <div>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16">
        <div className="mx-auto w-[90%] sm:w-[400px] h-[400px]  border-solid border-white border-2  bg-black flex flex-col items-center xl:items-start justify-start items rounded-3xl px-4 sm:px-1 xl:pl-10 pt-10">
          <img
            src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689937373/organic_Hair_oil_zqtka4.png"
            className=" h-20"
          ></img>
          <div className="text-[#173D28] text-center xl:text-left font-lato text-xl md:text-xl xl:text-2xl font-thin capitalize tracking-[-0.3px] mt-7 mb-10 sm:mb-3 sm:pr-10">
            <p>Mixed Herb Hair Oil</p>
            <p>Moringa Leaf Hair Oil</p>
            <p>Ginkgo Biloba Hair Oil</p>
            <p>Amla Hair Oil </p>
            <p>Onion Hair Oil</p>
          </div>
        </div>

        <div className=" mx-auto w-[90%] sm:w-[400px] h-[400px]  border-solid border-white border-2  bg-black flex flex-col items-center xl:items-start justify-start items rounded-3xl px-4 sm:px-1 xl:pl-10 pt-10">
          <img
            src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689937372/afdadf_Face_cream_ioxpwd.png"
            className=" h-20"
          ></img>
          <div className="text-[#173D28] text-center xl:text-left font-lato text-xl md:text-xl xl:text-2xl font-thin capitalize tracking-[-0.3px] mt-7 mb-10 sm:mb-3 sm:pr-10">
            <p>Fair white cream</p>
            <p>Rice cream</p>
            <p>Hibiscus cream</p>
            <p> Aloe vera cream</p>
            <p>Vitamin C cream</p>
            <p>Turmeric cream </p>
            <p>Jhumpa special cream</p>
          </div>
        </div>

        <div className="mx-auto w-[90%] sm:w-[400px]  border-solid border-white border-2  bg-black flex flex-col items-center xl:items-start justify-start items rounded-3xl px-4 sm:px-1 xl:pl-10 pt-10">
          <img
            src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689937372/afdadf_Sampoo_nrhcck.png"
            className=" h-20"
          ></img>
          <div className="text-[#173D28] text-center xl:text-left font-lato text-xl md:text-xl xl:text-2xl font-thin capitalize tracking-[-0.3px] mt-7 mb-10 sm:mb-3 sm:pr-10">
            <p>Onion shampoo</p>
            <p> Anti hair fall shampoo</p>
            <p>Keratin smooth shampoo</p>
            <p> Jhumpa special shampoo</p>
          </div>
        </div>

        <div className=" mx-auto w-[90%] sm:w-[400px] h-[400px]  border-solid border-white border-2  bg-black flex flex-col items-center xl:items-start justify-start items rounded-3xl px-4 sm:px-1 xl:pl-10 pt-10">
          <img
            src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689937373/organic_Face_wash_jl9om1.png"
            className=" h-20"
          ></img>
          <div className="text-[#173D28] text-center xl:text-left font-lato text-xl md:text-xl xl:text-2xl font-thin capitalize tracking-[-0.3px] mt-7 mb-10 sm:mb-3 sm:pr-10">
            <p>Aloe vera face wash</p>
            <p>Charcoal face wash</p>
            <p>Mixed fruit face wash</p>
            <p>Mixed herb face wash</p>
            <p>Turmeric face wash </p>
            <p>Jhumpa special face wash</p>
            <p> Neem face wash</p>
          </div>
        </div>

        <div className=" mx-auto w-[90%] sm:w-[400px] h-[400px]  border-solid border-white border-2  bg-black flex flex-col items-center xl:items-start justify-start items rounded-3xl px-4 sm:px-1 xl:pl-10 pt-10">
          <img
            src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689937372/afdadf_Serum_vyqzha.png"
            className=" h-20"
          ></img>
          <div className="text-[#173D28] text-center xl:text-left font-lato text-xl md:text-xl xl:text-2xl font-thin capitalize tracking-[-0.3px] mt-7 mb-10 sm:mb-3 sm:pr-10">
            <p>Vitamin c serum</p>
            <p>Niacinamite serum</p>
            <p>Guava serum</p>
            <p>Jhumpa special serum</p>
          </div>
        </div>

        <div className="mx-auto w-[90%] sm:w-[400px] h-[400px]  border-solid border-white border-2  bg-black flex flex-col items-center xl:items-start justify-start items rounded-3xl px-4 sm:px-1 xl:pl-10 pt-10">
          <img
            src="https://res.cloudinary.com/dkqxnquga/image/upload/v1689937372/afdadf_Toner_zzkvf7.png"
            className=" h-20"
          ></img>
          <div className="text-[#173D28] text-center xl:text-left font-lato text-xl md:text-xl xl:text-2xl font-thin capitalize tracking-[-0.3px] mt-7 mb-10 sm:mb-3 sm:pr-10">
            <p>Green tean toner </p>
            <p>Vitamin c toner </p>
            <p>Jhumpa special toner</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsGrid;
