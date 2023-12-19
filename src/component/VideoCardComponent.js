import React from 'react'
import useMovieDetails from '../hooks/useMovieDetails'
import { BG_CDN_URL } from '../utils/constant';
import { FaPlay } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import CardShimmer from './CardShimmer';
import { useNavigate } from 'react-router';


const VideoCardComponent = ({movie_id , movie_key , setishover , card_id }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const result = useMovieDetails(movie_id , movie_key);
    if(!result) return <CardShimmer/>;
    let {backdropPath , genres , title ,name , voteAverage} = result;
    if(title?.length > 30){
        title = title.substring(0 , 28);
        title = title + "..."
    }
    if(name?.length > 30){
        name = name.substring(0 , 30)
    }
    if(genres.length > 3){
        genres = genres.splice(0 , genres.length - 3);
    }
    const setisHoverHandeler = () => {
        setishover(false);
    }
  return (

        <div className='flex items-center justify-center z-50 relative'
            onClick={() => navigate("/watch/"+ movie_key+"/" + movie_id)}
        >
            <div className='h-[117px] w-[155px] absolute scale-[2] items-center duration-500 flex flex-col 
             bg-[#141414] rounded-lg shadow-md shadow-black '
                onMouseLeave={setisHoverHandeler}
            >
                <img src={BG_CDN_URL + backdropPath} alt='bg-image' className=' rounded-t-md h-[4.6rem] w-full'/>
                <div className=' flex justify-between w-full p-2 -mt-7'>
                    <div className=' flex gap-x-1 '>
                        <button className=' text-green-600 pl-[0.4rem] bg-opacity-50 bg-black  rounded-full h-5 w-5 cursor-pointer border border-white hover:border-slate-400'>
                            <FaPlay className=' w-2 h-2'/>
                        </button>
                        <button className='  text-pink-700 pl-[0.4rem] bg-black bg-opacity-50 rounded-full  cursor-pointer h-5 w-5 border border-white hover:border-slate-400'>
                            <AiOutlineLike className=' w-2 h-2'/>
                        </button>
                        <button className=' text-yellow-500 pl-[0.4rem] bg-opacity-50 bg-black rounded-full  cursor-pointer h-5 w-5 border border-white hover:border-slate-400'>
                            <FaPlus className=' w-2 h-2'/>
                        </button>
                    </div>
                    <div>
                        <button className=' text-purple-500 pl-[0.4rem] bg-opacity-50 bg-black rounded-full cursor-pointer h-5 w-5 border border-white hover:border-slate-400'>
                            <FaAngleDown className=' w-2 h-2'/>
                        </button>
                    </div>
                </div>
                {
                    movie_key === "movie" ? <p className=' font-bold text-[0.5rem] -mt-3'>{title}</p> :  <p className=' font-bold text-[0.5rem] -mt-3'>{name}</p>
                }
                <p className='text-[0.5rem] text-green-600 font-bold'>{voteAverage} Rating</p>
                <ul className=' flex text-[0.40rem] gap-x-1'>
                {
                   genres.map((li) => {
                    return (
                        <div className=' flex text-[0.40rem]'>
                            <li key={li?.id} className=' text-gray-500'>{li?.name}</li> 
                            <BsDot className=' mt-[3px]'/> 
                        </div>
                   )
                   })
                }
                </ul>
            </div>
        </div>
      )
}

export default VideoCardComponent