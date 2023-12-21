import React, { useEffect, useState } from 'react'
import MovieTitle from './MovieTitle'
import BackGroundTailer from './BackGroundTailer'
import useFetchmovies from '../hooks/useFetchmovies'
import { useSelector } from 'react-redux'
import Shimmer from './Shimmer'
import LaptopMainContainer from './LaptopMainContainer'
import MobileMainContainer from './MobileMainContainer'


const MainMovieContainer = ({path , trailerdata , trailerKey}) => {
  const [ismobile , setismobile] = useState(false);
 
  useEffect(() => {
    if(window.innerWidth < 600){
      setismobile(true);
    }
    else{
      setismobile(false);
    }
  },[window.innerWidth])
  
  return (
    <div className=' relative w-screen'>
        {
          !ismobile ? <LaptopMainContainer path = {path} trailerKey = {trailerKey} trailerdata={trailerdata}/> 
          : <MobileMainContainer trailerKey = {trailerKey} trailerdata = {trailerdata}/>
        }
    </div>
  )
}

export default MainMovieContainer