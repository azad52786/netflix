import React, { useEffect, useState } from 'react'
import MovieTitle from './MovieTitle'
import BackGroundTailer from './BackGroundTailer'
import useFetchmovies from '../hooks/useFetchmovies'
import { useSelector } from 'react-redux'
import Shimmer from './Shimmer'


const LaptopMainContainer = ({path , trailerdata , trailerKey}) => {
  const [ismute , setIsmute] = useState(true);
  let renderUI = null;
  renderUI = useSelector((store) => {
    if(path === "home"){
      return store.movies?.now_playing;
    }
    else if(path === "tvShow"){
      return store.tv?.popular;
    }
    else if(path === "movie"){
      return store.movietab?.popular;
    }
    else if(path === "new"){
      return store.new?.upcoming;
    }
  })

  useFetchmovies(path , [trailerdata] , trailerKey );
  if(!renderUI) return <Shimmer/>;
  const index = Math.round(Math.random() * renderUI.length);
    const tailerMovie = renderUI[index];
    const overview = tailerMovie?.overview;
    const original_title = tailerMovie?.original_title;
    const id = tailerMovie?.id;
  return (
    <div className=' relative w-screen'>
        <MovieTitle overview = {overview} title = {original_title} ismute={ismute} setIsmute={setIsmute} trailerKey ={trailerKey} movie_id = {id}/>
        <BackGroundTailer movie_id = {id} ismute={ismute} trailerKey ={trailerKey} path ={path}/>
    </div>
  )
}

export default LaptopMainContainer