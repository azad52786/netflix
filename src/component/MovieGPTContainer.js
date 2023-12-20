import React from "react";
import { FaSearch } from "react-icons/fa";

const MovieGPTContainer = () => {
  return (
    <div className="h-screen w-full flex flex-col gap-y-4 items-center justify-center bg-gradient-to-b from-blue-700 via-gray-400 to-gray-900">
      <div className="w-full h-[50%] flex flex-col gap-y-4 items-center justify-center">
        <h1 className=" sm:text-6xl text-2xl font-bold text-white">
          Let me be your film expert!
        </h1>
        <p className=" sm:text-xl text-center brightness-90 text-white">
          Explore Kid-Friendly Movies for an Ideal Family Movie Night
        </p>
        <div className=" w-full relative">
          <div className=" flex gap-x-2 w-11/12 mx-auto">
            <FaSearch className=" text-white absolute sm:top-[1.5rem] sm:left-[5rem] top-4 left-6 font-bold" />
            <input
              type="text"
              placeholder="Please enter the type of Movie you would like to see."
              className=" w-full sm:h-16 h:10 bg-slate-100 text-black font-bold sm:text-xl text-xs sm:opacity-30 opacity-60 outline-none sm:pl-12 pl-7 rounded-md"
            />
            <button className=" px-3 py-2 bg-red-500 md:rounded-sm rounded-md font-bold text-lg">
              Search
            </button>
          </div>
          <p></p>
        </div>
      </div>
      <div className=" min-h-[50%]">
        <h1 className=" sm:w-7/12 w-10/12 text-xl sm:text-4xl text-gray-700 font-bold mx-auto text-center">
          I am a second-year student and don't have a lot of money. The OpenAI
          API charges for suggestions, that's why this feature will be {" "}<span className=" text-slate-800">coming soon....</span> 
        </h1>
      </div>
    </div>
  );
};

export default MovieGPTContainer;
