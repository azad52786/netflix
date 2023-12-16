import React, { useState } from 'react'
import MovieTitle from './MovieTitle'
import BackGroundTailer from './BackGroundTailer'
import useFetchTvShow from '../hooks/useFetchTvShow'
import { useSelector } from 'react-redux'
import { now_playing} from '../utils/constant'
import Shimmer from './Shimmer'


const TvShowCompo = () => {
  const [ismute , setIsmute] = useState(true);
  useFetchTvShow(on_the_air);
    const movies = useSelector((store) => (store.movies?.now_playing));
    if(!movies) return <Shimmer/>;
    const tailerMovie = movies[2];
    const {overview , original_title , id} = tailerMovie;
  return (
    <div className=' relative w-screen'>
        <MovieTitle overview = {overview} title = {original_title} ismute={ismute} setIsmute={setIsmute} />
        <BackGroundTailer movie_id = {id} ismute={ismute}/>
    </div>
  )
}

export default TvShowCompo