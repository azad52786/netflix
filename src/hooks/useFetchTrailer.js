import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerData, removeTrailerData } from "../utils/moviesSlice";

const useFetchTrailer = (movie_id) => {
    const dispatch = useDispatch();
    const fetchTrailer = async() => {
        const trailerapi = await fetch('https://api.themoviedb.org/3/movie/'+ movie_id +'/videos' , API_OPTIONS);
        const json = await trailerapi.json();
        const trailerData = json.results.filter(
            (video) => video.type === "Trailer"
          );
        const index = Math.round(Math.random() * trailerData.length);
        const trailer = trailerData.length ? trailerData[index] : json.results[0];
        // dispatch(removeTrailerData());
        dispatch(addTrailerData(trailer));
    }
    useEffect(() => {
        fetchTrailer();
    }, []);
}

export default useFetchTrailer