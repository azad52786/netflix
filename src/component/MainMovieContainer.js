import React, { useState } from 'react'
import MovieTitle from './MovieTitle'
import BackGroundTailer from './BackGroundTailer'
import useFetchmovies from '../hooks/useFetchmovies'
import { useSelector } from 'react-redux'
import Shimmer from './Shimmer'


const MainMovieContainer = ({path , trailerdata , trailerKey}) => {
  const [ismute , setIsmute] = useState(true);
    useFetchmovies(path , [trailerdata] , trailerKey);
    const movies = useSelector((store) => (store.movies?.now_playing));
    const tvshow = useSelector((store) => (store.tv?.popular));
    const movieTabmovies = useSelector((store) => (store.movietab?.popular));
    const newTabmovies = useSelector((store) => (store.new?.upcoming))
    let renderUI = null;
    if(path === "home"){
      renderUI = movies;
    }
    else if(path === "tvShow"){
      renderUI = tvshow;
    }
    else if(path === "movie"){
      renderUI = movieTabmovies;
    }
    else if(path === "new"){
      renderUI = newTabmovies;
    }
    if(!renderUI) return <Shimmer/>;
    const index = Math.round(Math.random() * renderUI.length);
    const tailerMovie = renderUI[index];
    const overview = tailerMovie?.overview;
    const original_title = tailerMovie?.original_title;
    const id = tailerMovie?.id;
  return (
    <div className=' relative w-screen'>
        <MovieTitle overview = {overview} title = {original_title} ismute={ismute} setIsmute={setIsmute} />
        <BackGroundTailer movie_id = {id} ismute={ismute} trailerKey ={trailerKey} path ={path}/>
    </div>
  )
}

export default MainMovieContainer