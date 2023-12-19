import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import BodySpinner from './BodySpinner';
import useFetchVideo from '../hooks/useFetchVideo';

const VideoContainer = () => {
    const {movieKey , movieId} = useParams();
    const video_key = useFetchVideo(movieKey , movieId);
    if(!video_key) return <BodySpinner/>;
  return (
    <div className=" w-screen h-screen after:bg-gradient-to-r from-black overflow-hidden">
        <BodySpinner/>
      <iframe
        className=" w-screen h-screen absolute z-10 top-0 left-0" 
        src={"https://www.youtube.com/embed/" + video_key + "?autoplay=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default VideoContainer