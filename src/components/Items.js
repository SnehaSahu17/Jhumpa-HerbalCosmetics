import React from 'react'

function Items({id,link,text}) {
  return (
    <div
      key={id}
      className=" h-[400px] 2xl:h-[550px]  border-solid border-white border-2  bg-black flex flex-col items-start justify-start items rounded-3xl px-4 sm:px-1 xl:pl-12 pt-8"
    >
      <img src={link} className=" h-20"></img>
      <p className="text-[#173D28] text-left font-lato text-2xl md:text-xl 2xl:text-3xl font-normal capitalize 2xl:leading-[43px] 2xl:tracking-[-0.3px] mt-7 mb-10 sm:mb-3 xl:pr-24 2xl:pr-28">
        {text}
      </p>
    </div>
  );
}

export default Items