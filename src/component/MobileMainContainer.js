import React, { useEffect, useState } from "react";
import useFetchmovieId from "../hooks/useFetchmovieId";
import useMovieDetails from "../hooks/useMovieDetails";
import { MAIN_BG_URL } from "../utils/constant";
import { BsDot } from "react-icons/bs";
import { useNavigate } from "react-router";
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import MobileContainerShimmer from "./MobileContainerShimmer";

const MobileMainContainer = ({ trailerKey, trailerdata }) => {
  let movie_id = useFetchmovieId(trailerKey, trailerdata);
  const navigate = useNavigate()
  let result = null;
  result = useMovieDetails(movie_id, trailerKey);
  let [backdropPath, setbackdropPath] = useState(null);
  let [genres, setGenres] = useState([]);
  let [title, settitle] = useState(null);
  useEffect(() => {
    if (result && result.backdropPath) {
      setbackdropPath(result.backdropPath);
    }
    if (result && result.genres) {
      setGenres(result.genres);
    }
    if (result && result.title) {
      settitle(result?.title.substr(0 , 15));
    }
  }, [result]);

  if (movie_id === 0 || !result) return <MobileContainerShimmer/>;
  const videoPlayerHandeler = () => {
    navigate("/watch/"+ trailerKey +"/" + movie_id);
  }

  return (
    <div className=" relative">
      <div className=" relative overflow-hidden bg-black">
        <img
          src={MAIN_BG_URL + backdropPath}
          width={355}
          className=" bg-cover pt-[90px] min-h-[520px] w-fit mx-auto rounded-md "
        />
      </div>
      <div className=" absolute top-0 min-w-full min-h-full bg-black bg-opacity-50">

        <div className=" w-2/3 mx-auto pt-96 flex flex-col items-center">
          <h1 className=" text-2xl font-bold text-white text-center">{title}</h1>
          <ul className=" flex flex-row items-center justify-center  mt-3">
            {genres.map((li) => {
              return (
                <div className='flex text-sm text-white'  key={li?.id}>
                  <li className=' '>{li?.name}</li> 
                  <BsDot className= '  mt-[3px]'/> 
                </div>
              )
            })}
          </ul>
          <div className='flex gap-x-3 text-sm mt-4'>
                <button className='flex py-2 text-xs px-3 bg-white text-black font-bold gap-x-2 rounded-md h-fit'
                  onClick={videoPlayerHandeler}
                >
                  <FaPlay className='mt-1'/> Play </button>
                <button className='flex text-xs py-2 px-1 bg-[#6d6d6e] bg-opacity-70 text-white font-bold gap-x-2 rounded-md'
                  onClick={() => navigate('/errorPage')}
                >
                  <FaInfoCircle className='mt-[2px]'/> More info</button> 
            </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMainContainer;
