import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'
import useFetchmovies from '../hooks/useFetchmovies'
import Shimmer from './Shimmer'

const SecondaryMovieContainer = ({movieType , trailerKey , path}) => {
  let allmovieData = null;
  if(path === "home"){
    allmovieData = Object.values(movieType);
  }
  else if(path === "tvShow"){
    allmovieData = Object.values(movieType);
  }
  else if(path === "movie"){
    allmovieData = Object.values(movieType);
  }
  else if(path === "new"){
    allmovieData = Object.values(movieType);
  }
  let movies = null;
  movies = useSelector((store) => {
    if(path === "home") {
      return store?.movies;
    }
    else if(path === "tvShow"){
      return store?.tv;
    }
    else if(path === "movie"){
      return store?.movietab;
    }
    else if(path === "new"){
      return store?.new;
    }
  })
  useFetchmovies(path , allmovieData , trailerKey);

  let currPageMovies = new Map(Object.entries(movies));
  if(!movies) return ;
  return (
    <div className='bg-[#141414]'>
        <div className='md:-mt-[15%] relative z-20 w-[95%] sm:mx-9 mx-5'>
        {
        Array.from(currPageMovies.entries()).map(([key, value], index) => (
          <MovieCard title={key} movies={value} id={"movie" + index + 1} key={index} path = {path}/>
        ))
      }
        </div>
    </div>
  )
}

export default SecondaryMovieContainer