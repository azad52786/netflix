import React, { useState } from "react";
import useFetchTrailer from "../hooks/useFetchTrailer";
import { useSelector } from "react-redux";

const BackGroundTailer = ({ movie_id, ismute , trailerKey  , path}) => {
  useFetchTrailer(movie_id , trailerKey , path);
  const Home_movie_key = useSelector((store) => store.alltrailer?.HomeTrailer?.key);
  const tv_movie_key = useSelector((store) => (store.alltrailer?.TvShowTrailer?.key));
  const movie_movie_key = useSelector((store) => (store.alltrailer?.MovieTrailer?.key));
  let trailer_key = null;
  if(trailerKey === "movie" && path === "home"){
    trailer_key = Home_movie_key;
    if(trailer_key === undefined){
      trailer_key = "zP0AsKwd_Fo";
    }
  }
  else if(trailerKey === "tv" && path === "tvShow"){
    trailer_key = tv_movie_key;
    if(trailer_key === undefined){
      trailer_key = "HQ8H5gqGA34";
    }
  }
  else if(trailerKey === "movie" && path === "movie"){
    trailer_key = movie_movie_key;
    if(trailer_key === undefined){
      trailer_key = "973Ct2AC3EA";
    }
  }
  else if(trailerKey === "movie" && path === "new"){
    trailer_key = movie_movie_key;
    if(trailer_key === undefined){
      trailer_key = "giXco2jaZ_4";
    }
  }
  let movie_source = ismute
    ? "https://www.youtube.com/embed/" + trailer_key + "?autoplay=1&mute=1"
    : "https://www.youtube.com/embed/" + trailer_key + "?autoplay=1";
  return (
    <div className=" w-screen  after:bg-gradient-to-r from-black">
      <iframe
        className=" w-screen aspect-video h-[26rem] sm:h-fit"
        src={movie_source}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BackGroundTailer;
