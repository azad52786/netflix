import React from "react";

const CardShimmer = () => {
  return (
    <div className="flex items-center justify-center z-50 relative">
      <div
        className="h-[117px] w-[155px] absolute scale-[2] items-center duration-500 flex flex-col 
             bg-[#2f2d2d] rounded-lg shadow-md shadow-black"
      >
        <div className="bg-[#1a1a1a] rounded-sm duration-300 animate-pulse h-[4.6rem] w-full"></div>
        <div className=" flex justify-between w-full p-2 -mt-7">
          <div className=" flex gap-x-1 ">
            <button className=" bg-[#1a1a1a] rounded-full duration-300 animate-pulse  cursor-pointer h-5 w-5"></button>
            <button className=" bg-[#1a1a1a] rounded-full duration-300 animate-pulse  cursor-pointer h-5 w-5"></button>
            <button className=" bg-[#1a1a1a] rounded-full duration-300 animate-pulse  cursor-pointer h-5 w-5"></button>
          </div>
          <div>
            <button className=" bg-[#1a1a1a] rounded-full duration-300 animate-pulse  cursor-pointer h-5 w-5"></button>
          </div>
        </div>
        <div className=" bg-[#1a1a1a] rounded-sm duration-300 animate-pulse  cursor-pointer h-3 w-24 -mt-2"></div>
        <div className=" bg-[#1a1a1a] rounded-sm duration-300 animate-pulse  cursor-pointer h-3 w-20 mt-[0.2rem]"></div>
        <div className=" flex gap-2">
            <div className=" bg-[#1a1a1a] rounded-sm duration-300 animate-pulse  cursor-pointer h-2 mb-1 w-7 mt-[0.2rem]"></div>
            <div className=" bg-[#1a1a1a] rounded-sm duration-300 animate-pulse  cursor-pointer h-2 mb-1 w-7 mt-[0.2rem]"></div>
            <div className=" bg-[#1a1a1a] rounded-sm duration-300 animate-pulse  cursor-pointer h-2 mb-1 w-7 mt-[0.2rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default CardShimmer;
