import React from 'react'
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const MovieTitle = ({title , overview}) => {
  return (
    <div className=' absolute pt-80 z-20 text-white  px-9 w-full aspect-video  bg-gradient-to-r from-black bg-opacity-80'>
      <div className=' w-5/12'>
          <h1 className=' text-6xl font-bold mb-3'>{title}</h1>
          <p className="text-md md:text-base line-clamp-2 md:line-clamp-2 xl:line-clamp-3">{overview}</p>
          <div className=' flex gap-x-3 mt-4 text-xl'>
              <button className=' flex py-3 px-5 bg-white text-black font-bold gap-x-2 rounded-md'>
                <FaPlay className='mt-1'/> Play </button>
              <button className=' flex py-3 px-5 bg-[#6d6d6e] bg-opacity-70 text-white font-bold gap-x-2 rounded-md'>
                <FaInfoCircle className=' mt-1 '/> More info</button> 
          </div>
      </div>
    </div>

  )
}

export default MovieTitle