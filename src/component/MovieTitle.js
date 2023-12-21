import React from 'react'
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { GoUnmute } from "react-icons/go";
import { IoVolumeMuteOutline } from "react-icons/io5";
import { useNavigate } from 'react-router';


const MovieTitle = ({title , overview ,ismute  ,setIsmute , trailerKey , movie_id}) => {
  const navigate = useNavigate();
  const videoPlayerHandeler = () => {
    navigate("/watch/"+ trailerKey +"/" + movie_id);
  }
  return (
    <div className=' absolute pb-[4.5rem] sm:pb-0 flex flex-row items-end sm:items-stretch justify-between pt-[20%] z-20 text-white  px-9 w-full aspect-video  bg-gradient-to-r from-black bg-opacity-80'>
      <div className=' sm:w-7/12 md:w-5/12 w-8/12 mx-auto md:mx-0'>
          <h1 className=' text-center md:text-start text-xl pt-44 sm:pt-0 sm:text-2xl sm:text-center md:text-5xl font-bold sm:mb-3 mb-2'>{title}</h1>
          <p className="  md:text-md hidden md:block md:text-base line-clamp-2 md:line-clamp-2 xl:line-clamp-3">{overview}</p>
          <div className='flex gap-x-3 ml-[25%] sm:ml-[20%] md:ml-0 mt-4 md:text-xl text-sm '>
              <button className=' sm:h-10 flex py-2 md:py-3 sm:py-2 text-xs sm:text-sm md:text-lg sm:px-5 px-3 md:h-fit bg-white text-black font-bold gap-x-2 rounded-md h-fit'
                onClick={videoPlayerHandeler}
              >
                <FaPlay className='mt-1'/> Play </button>
              <button className='flex text-[0.5rem] md:text-lg sm:text-sm sm:py-3 py-1 px-1 sm:px-2 bg-[#6d6d6e] bg-opacity-70 text-white font-bold gap-x-2 rounded-md'>
                <FaInfoCircle className=' mt-[5px] sm:mt-1'/> More info</button> 
          </div>
      </div>
      <button
        className=' sm:mr-9 border border-blue-300 rounded-full sm:w-10 sm:h-10 w-7 h-7  mt-52 content-center'
        onClick={() => setIsmute(!ismute)}
      >
        {
          ismute && 
          <IoVolumeMuteOutline className='sm:w-7 sm:h-7 w-5 h-5'/>
        }
        {
          !ismute && 
          <GoUnmute className='sm:w-7 sm:h-7 w-5 h-5'/>
        }
      </button>
    </div>

  )
}

export default MovieTitle