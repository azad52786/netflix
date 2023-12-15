import React, { useState } from "react";
import useFetchTrailer from "../hooks/useFetchTrailer";
import { useSelector } from "react-redux";
import { GoUnmute } from "react-icons/go";
import { IoVolumeMuteOutline } from "react-icons/io5";

const BackGroundTailer = ({ movie_id, ismute }) => {
  useFetchTrailer(movie_id);
  const movie_key = useSelector((store) => store.movies?.trailer?.key);
  let movie_source = ismute
    ? "https://www.youtube.com/embed/" + movie_key + "?autoplay=1&mute=1"
    : "https://www.youtube.com/embed/" + movie_key + "?autoplay=1";
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
