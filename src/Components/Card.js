import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Card(props) {
  const { review } = props;
 
  return (
    <div className="flex flex-col md:relative">
      <div className="absolute top-[-7rem] z-[10] mx-auto" >
        <img src={review.image} alt={review.name} 
        className="aspect-square rounded-full w-[140px] h-[140px] z-[25]" />
        <div className="w-[140px] h-[140px] rounded-full z-[-10] absolute top-[-6px] left-[10px] bg-violet-500"></div>
      </div>
      <div className="text-center mt-7">
        <p className="font-bold text-1xl capitalize">{review.name}</p>
      </div>
      <div className="text-center mt-1">
        <p className="text-violet-400 uppercase text-sm">{review.job}</p> 
      </div>
      <div className="text-violet-500 mx-auto mt-5">
      <FaQuoteLeft />
        
      </div>
      <div className="text-center mt-4 text-slate-500">
        {review.text}
      </div>
      <div className="text-violet-500 mx-auto mt-5">
      <FaQuoteRight />
      </div>
      
    </div>
  );
}

export default Card;
