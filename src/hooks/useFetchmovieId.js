import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";

const useFetchmovieId = (trailerKey, trailerdata) => {
    const [movie_id, setMovieId] = useState(0);
  
    useEffect(() => {
      const fetchid = async () => {
        try {
          const fetchData = await fetch(
            `https://api.themoviedb.org/3/${trailerKey}/${trailerdata}`,
            API_OPTIONS
          );
          const jsonData = await fetchData.json();
          const data = jsonData.results;
          let index = Math.round(Math.random() * data.length);
          if (index > 0) index = index + 1;
          setMovieId(data[index]?.id);
        } catch (error) {
          console.error('Error fetching movie ID:', error);
        }
      };
  
      fetchid();
    }, [trailerKey, trailerdata]);
  
    return movie_id;
  };

  export default useFetchmovieId;