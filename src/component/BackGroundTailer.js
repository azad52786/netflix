import React, { useState } from "react";
import useFetchTrailer from "../hooks/useFetchTrailer";
import { useSelector } from "react-redux";

const BackGroundTailer = ({ movie_id, ismute , trailerKey  , path}) => {
  useFetchTrailer(movie_id , trailerKey , path);
  let trailer_key = useSelector((store) => {
    if(trailerKey === "movie" && path === "home"){
      return store.alltrailer?.HomeTrailer?.key;
      // trailer_key = Home_movie_key;
      // if(trailer_key === undefined){
      //   trailer_key = "zP0AsKwd_Fo";
      // }
    }
    else if(trailerKey === "tv" && path === "tvShow"){
      let trailer_key = store.alltrailer?.TvShowTrailer?.key;
      if(trailer_key === undefined){
        trailer_key = "HQ8H5gqGA34";
      }
      return trailer_key;
    }
    else if(trailerKey === "movie" && path === "movie"){
      let trailer_key =  store.alltrailer?.MovieTrailer?.key;

      if(trailer_key === undefined){
        trailer_key = "973Ct2AC3EA";
      }
      return trailer_key;
    }
    else if(trailerKey === "movie" && path === "new"){
      return store.alltrailer?.NewTrailer?.key;
    }
  })

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
