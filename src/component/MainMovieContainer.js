import React from 'react'
import MovieTitle from './MovieTitle'
import BackGroundTailer from './BackGroundTailer'
import useFetchmovies from '../hooks/useFetchmovies'
import { useSelector } from 'react-redux'
import { now_playing} from '../utils/constant'


const MainMovieContainer = () => {
    useFetchmovies(now_playing);
    const movies = useSelector((store) => (store.movies?.now_playing));
    if(!movies) return ;
    const tailerMovie = movies[2];
    const {overview , original_title , id} = tailerMovie;
  return (
    <div className=' relative w-screen'>
        <MovieTitle overview = {overview} title = {original_title}/>
        <BackGroundTailer movie_id = {id}/>
    </div>
  )
}

export default MainMovieContainer