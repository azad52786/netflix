import React from "react";
import useFetchTrailer from "../hooks/useFetchTrailer";
import { useSelector } from "react-redux";

const BackGroundTailer = ({ movie_id }) => {
  useFetchTrailer(movie_id);
  const movie_key = useSelector((store) => store.movies?.trailer?.key);
  return (
    <div className=" w-screen after:bg-gradient-to-r from-black">
      <iframe
        className=" w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + movie_key + "?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BackGroundTailer;
