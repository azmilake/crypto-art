import React from 'react'

import CardData from '../utils/cardDataLargest.json'

export default function CardSlider({ pic, code, price, date }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col">
          <div className="w-full md:w-[426px] h-full md:h-[426px] mb-7">
            <img src={pic} />
          </div>
          <div className="">
            <h2 className="text-sm md:text-[26px] font-medium">{code}</h2>
            <h5 className="text-base md:text-xl mb-5">{price}</h5>
            <p className="text-sm md:text-base text-[#565656]">{date}</p>
          </div>
        </div>
      </div>
    </>
  )
}
