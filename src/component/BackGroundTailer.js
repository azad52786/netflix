import React, { useState } from "react";
import useFetchTrailer from "../hooks/useFetchTrailer";
import { useSelector } from "react-redux";

const BackGroundTailer = ({ movie_id, ismute , trailerKey }) => {
  useFetchTrailer(movie_id , trailerKey);
  const Home_movie_key = useSelector((store) => store.alltrailer?.HomeTrailer?.key);
  const tv_movie_key = useSelector((store) => (store.alltrailer?.TvShowTrailer?.key));
  let trailer_key = null;
  if(trailerKey === "movie"){
    trailer_key = Home_movie_key;
  }
  else if(trailerKey === "tv"){
    trailer_key = tv_movie_key;
  }
  let movie_source = ismute
    ? "https://www.youtube.com/embed/" + trailer_key + "?autoplay=1&mute=1"
    : "https://www.youtube.com/embed/" + trailer_key + "?autoplay=1";
  return (
    <div className=" w-screen after:bg-gradient-to-r from-black">
      <iframe
        className=" w-screen aspect-video"
        src={movie_source}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BackGroundTailer;
