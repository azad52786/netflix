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
  useFetchmovies(path , allmovieData , trailerKey);
  const tvshow = useSelector((store) => (store?.tv));
  const homemovie = useSelector((store) => (store?.movies));
  const moviemovie = useSelector((store) => (store?.movietab));
  const newmovie = useSelector((store) => (store?.new))
  let movies = null;
  if(path === "home") {
    movies = homemovie;
  }
  else if(path === "tvShow"){
    movies = tvshow;
  }
  else if(path === "movie"){
    movies = moviemovie;
  }
  else if(path === "new"){
    movies = newmovie;
  }
  let currPageMovies = new Map(Object.entries(movies));
  console.log(currPageMovies)
  if(!movies) return ;
  return (
    <div className='bg-[#141414]'>
        <div className='-mt-[15%] relative z-20 overflow-hidden w-[95%] mx-9'>
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