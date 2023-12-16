import React from 'react'
import { IMG_CDN_URL } from '../utils/constant';
import { Link } from 'react-router-dom';

const CardImagelist = (props) => {
  const movie = props.movie;
  const poster_path = movie.poster_path;
  return (
      <div className=' cursor-pointer  h-[230px] min-w-[148px] rounded-md overflow-hidden'>
        <img
          className=' rounded-md h-[230px] min-w-[148px] hover:scale-110 duration-500'
            alt = "image"
            src={IMG_CDN_URL + poster_path}
          />
      </div>
  )
}

export default CardImagelist;



export const TopRated = (CardImagelist) => {
  return (props) => {
    return (
      <div className=' flex'>
        <h1 className=' h-full text-[13rem] leading-none pb-5 -mr-8 font-bold'>{props.index}</h1>
        <CardImagelist {...props}/>
      </div>
    )
  }
}