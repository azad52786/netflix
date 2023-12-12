import React from 'react'
import { IMG_CDN_URL } from '../utils/constant';
import { Link } from 'react-router-dom';

const CardImagelist = (props) => {
  return (
      // <div className=''>
      < >
      {/* <Link to='/'> */}
        <img
          className=' rounded-md h-[230px] min-w-[148px]'
            alt = "image"
            src={IMG_CDN_URL + props?.movies_path}
          />
      {/* </Link> */}

      </>
      // </div>
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