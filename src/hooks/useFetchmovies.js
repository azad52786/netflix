import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import {
  addnow_playingmovies,
  addpopularmovies,
  addupcomingmovies,
  addtop_ratedmovies,
} from "../utils/moviesSlice";
import {
  addairing_todaytv,
  addon_the_airtv,
  addpopulartv,
  addtop_ratedtv,
} from "../utils/tvShowSlice";
import { addpopulermovietab } from "../utils/movieTabSlice";
import {
  addnewnow_playingmovies,
  addnewupcomingmovies,
} from "../utils/newmovieSlice";

const useFetchMovies = (path, movieArr, trailerKey) => {
  const dispatch = useDispatch();

  const fetchMovies = async (movieTitle) => {
    try {
      const fetchData = await fetch(
        `https://api.themoviedb.org/3/${trailerKey}/${movieTitle}`,
        API_OPTIONS
      );
      const movies = await fetchData.json();

      const dispatchAction = getDispatchAction(path, movieTitle);
      dispatch(dispatchAction(movies?.results));
    } catch (error) {
      console.error(`Error fetching ${movieTitle}:`, error);
    }
  };

  const getDispatchAction = (path, movieTitle) => {
    const actionMap = {
      home: {
        now_playing: addnow_playingmovies,
        popular: addpopularmovies,
        upcoming: addupcomingmovies,
        top_rated: (movies) => dispatch(addtop_ratedmovies(movies.slice(0, 9))),
      },
      tvShow: {
        airing_today: addairing_todaytv,
        popular: addpopulartv,
        on_the_air: addon_the_airtv,
        top_rated: (movies) => dispatch(addtop_ratedtv(movies.slice(0, 9))),
      },
      movie: {
        default: addpopulermovietab,
      },
      new: {
        now_playing: addnewnow_playingmovies,
        upcoming: addnewupcomingmovies,
      },
    };

    return actionMap[path]?.[movieTitle] || actionMap[path]?.default;
  };

  useEffect(() => {
    for (let movieTitle in movieArr) {
      fetchMovies(movieArr[movieTitle]);
    }
  }, [path]);
};

export default useFetchMovies;
