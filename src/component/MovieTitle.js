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
    <div className=' absolute flex flex-row justify-between pt-80 z-20 text-white  px-9 w-full aspect-video  bg-gradient-to-r from-black bg-opacity-80'>
      <div className=' w-5/12'>
          <h1 className=' text-6xl font-bold mb-3'>{title}</h1>
          <p className="text-md md:text-base line-clamp-2 md:line-clamp-2 xl:line-clamp-3">{overview}</p>
          <div className=' flex gap-x-3 mt-4 text-xl'>
              <button className=' flex py-3 px-5 bg-white text-black font-bold gap-x-2 rounded-md'
                onClick={videoPlayerHandeler}
              >
                <FaPlay className='mt-1'/> Play </button>
              <button className=' flex py-3 px-5 bg-[#6d6d6e] bg-opacity-70 text-white font-bold gap-x-2 rounded-md'>
                <FaInfoCircle className=' mt-1 '/> More info</button> 
          </div>
      </div>
      <button
        className=' mr-9 border border-blue-300 rounded-full w-10 h-10 mt-52 content-center'
        onClick={() => setIsmute(!ismute)}
      >
        {
          ismute && 
          <IoVolumeMuteOutline className='w-7 h-7'/>
        }
        {
          !ismute && 
          <GoUnmute className='w-7 h-7'/>
        }
      </button>
    </div>

  )
}

export default MovieTitle