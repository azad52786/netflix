import React from 'react'
import MainMovieContainer from './MainMovieContainer';
import SecondaryMovieContainer from './SecondaryMovieContainer';
const Browse = ({path}) => {
  let trailerdata = null;
  let trailerKey = null;
  let movieType = null;
  if(path === "home"){
    trailerdata = "now_playing";
    trailerKey = "movie";
    movieType = {
      upcoming : "upcoming",
      top_rated : "top_rated",
      popular : "popular"
    }
  }
  else if(path === "tvShow"){
    trailerdata = "popular";
    trailerKey = "tv";
    movieType = {
      airing_today : "airing_today",
      on_the_air : "on_the_air",
      top_rated : "top_rated"
    }
  }
  else if(path === "movie"){
    trailerdata = "popular";
    trailerKey = "movie";
    movieType = {
      popular : "popular"
    }
  }
  else if(path === "new"){
    trailerKey = "movie";
    trailerdata = "upcoming";
    movieType = {
      upcoming : "upcoming",
      now_playing : "now_playing"
    }
  }
  return (
    <div className='bg-[#6b7280] overflow-x-hidden'>
        <MainMovieContainer path={path} trailerdata={trailerdata} trailerKey={trailerKey}/>
        <SecondaryMovieContainer movieType = {movieType} path = {path} trailerKey = {trailerKey}/>
    </div>
  )
}

export default Browse