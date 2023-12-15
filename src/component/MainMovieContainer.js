import React, { useState } from 'react'
import MovieTitle from './MovieTitle'
import BackGroundTailer from './BackGroundTailer'
import useFetchmovies from '../hooks/useFetchmovies'
import { useSelector } from 'react-redux'
import { now_playing} from '../utils/constant'


const MainMovieContainer = () => {
  const [ismute , setIsmute] = useState(true);
    useFetchmovies(now_playing);
    const movies = useSelector((store) => (store.movies?.now_playing));
    if(!movies) return ;
    const tailerMovie = movies[2];
    const {overview , original_title , id} = tailerMovie;
  return (
    <div className=' relative w-screen'>
        <MovieTitle overview = {overview} title = {original_title} ismute={ismute} setIsmute={setIsmute} />
        <BackGroundTailer movie_id = {id} ismute={ismute}/>
    </div>
  )
}

export default MainMovieContainer