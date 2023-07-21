import React from 'react'

function Items({id,link,text}) {
  return (
    <div
      key={id}
      className="w-1/3 h-fit bg-black flex flex-col items-start justify-start"
    >
      <img src={link} className="w-10 h-10"></img>
      <p className="text-[#173D28] text-left font-lato text-3xl font-normal capitalize leading-[43px] tracking-[-0.3px]">
        {text}
      </p>
    </div>
  );
}

export default Items