import { useSelector } from 'react-redux';

const useMemorization = (movieTitle, path) => {
  return useSelector((store) => {
    if (path === 'home') {
      if (movieTitle === 'now_playing') {
        return store?.movies?.now_playing;
      } else if (movieTitle === 'popular') {
        return store?.movies?.popular;
      } else if (movieTitle === 'top_rated') {
        return store?.movies?.top_rated;
      } else if (movieTitle === 'upcoming') {
        return store?.movies?.upcoming;
      }
    } else if (path === 'tvShow') {
      if (movieTitle === 'popular') {
        return store?.tv?.popular;
      } else if (movieTitle === 'airing_today') {
        return store?.tv?.airing_today;
      } else if (movieTitle === 'on_the_air') {
        return store?.tv?.on_the_air;
      } else if (movieTitle === 'top_rated') {
        return store?.tv?.top_rated;
      }
    } else if (path === 'movie') {
      if (movieTitle === 'popular') {
        return store?.movies?.popular;
      }
    } else if (path === 'new') {
      if (movieTitle === 'upcoming') {
        return store?.movies?.upcoming;
      } else if (movieTitle === 'now_playing') {
        return store?.movies?.now_playing;
      }
    }

    return null;
  });
};

// i can do that by using switch case also 

export default useMemorization;
