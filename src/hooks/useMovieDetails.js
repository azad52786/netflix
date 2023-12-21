import React, { useEffect, useState } from 'react';
import { API_OPTIONS, FETCH_ALL_MOVIE_DETAILS } from '../utils/constant';

const useMovieDetails = (movie_id, movie_key) => {
  console.log(movie_id)
  console.log(movie_key)
  const [movieDetails, setMovieDetails] = useState(null);

  const fetchMovieDetails = async () => {
    try {
      if(!movie_id) return;
      const api_data = await fetch(FETCH_ALL_MOVIE_DETAILS + movie_key + '/' + movie_id, API_OPTIONS);
      const result = await api_data.json();
      setMovieDetails({
        backdropPath: result.backdrop_path,
        genres: result.genres,
        title: result?.title,
        name: result?.name,
        voteAverage: result.vote_average,
      });
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [movie_id, movie_key]);

  return movieDetails;
};

export default useMovieDetails;
