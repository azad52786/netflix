import React, { useEffect, useState } from 'react'
import { IMG_CDN_URL } from '../utils/constant';
import { Link, useNavigate } from 'react-router-dom';
import VideoCardComponent from './VideoCardComponent';
import { useDispatch } from 'react-redux';

const CardImagelist = (props) => {
  const [ishover , setishover] = useState(false);
  const [ismobile , setIsmobile] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movie = props.movie;
  const path = props.path;
  const movie_id = props.id;
  let movie_key = null;
  if(path === "new" || path === "movie" || path === "home"){
    movie_key = "movie";
  }else if(path === "tvShow"){
    movie_key = "tv";
  }

  useEffect(() => {
    if(window.innerWidth < 600){
      setIsmobile(true);
    }
    else{
      setIsmobile(false);
    } 
  },[window.innerWidth])

  const poster_path = movie.poster_path;

    const movieDetailsShowHandeler = () => {
      if(ismobile){
        navigate("/watch/"+ movie_key+"/" + movie_id)
      }
      else {
        setishover(true);
      }
    }

  return (
      <div className={`cursor-pointer  h-[235px] min-w-[148px] rounded-md flex justify-center items-center`}>
        {
          !ishover && 
        <img
          className=' rounded-md sm:h-[210px] sm:min-w-[148px] h-44 w-32 hover:scale-110 duration-500'
            alt={movie?.title ? `${movie.title} poster` : "Movie poster"}
            src={IMG_CDN_URL + poster_path}
            onMouseDown={movieDetailsShowHandeler}
          />
        }
          {
            ishover && !ismobile &&
            <VideoCardComponent movie_key={movie_key}  movie_id={movie_id} setishover={setishover}/>
          }
      </div>
  )
}

export default CardImagelist;



export const TopRated = (CardImagelist) => {
  return (props) => {
    return (
      <div className=' flex'>
        <h1 className=' h-full sm:text-[13rem] text-[10rem] leading-none pb-5 pt-10 sm:pt-0 -mr-8 font-bold -z-20'>{props.index}</h1>
        <CardImagelist {...props}/>
      </div>
    )
  }
}