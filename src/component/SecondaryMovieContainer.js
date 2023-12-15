import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'
import useFetchmovies from '../hooks/useFetchmovies'
import { popular , top_rated , upcoming } from '../utils/constant'
import MovieCardShimmer from './MovieCardShimmer'

const SecondaryMovieContainer = () => {
  
  useFetchmovies(popular);
  useFetchmovies(top_rated);
  useFetchmovies(upcoming);
  const movies = useSelector((store) => (store.movies));
  if(!movies) return <MovieCardShimmer/>;
  return (
    <div className='bg-[#141414]'>
        <div className='-mt-[15%] relative z-20 overflow-hidden w-[95%] mx-9'>
            <MovieCard title={"now_playing"} movies={movies?.now_playing} id="movie1"/>
            <MovieCard title={"top_rated"} movies={movies?.top_rated} id="movie3"/>
            <MovieCard title={"popular"} movies={movies?.popular} id="movie2"/>
            <MovieCard title={"upcoming"} movies={movies?.upcoming} id="movie4"/>
        </div>
    </div>
  )
}

export default SecondaryMovieContainer