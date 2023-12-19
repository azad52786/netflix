import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addhometrailer, addmovietrailer, addnewtrailer, addtvshowtrailer } from "../utils/trailerSlice";

const useFetchTrailer = (movie_id , trailerKey , path) => {
    const dispatch = useDispatch();
    const fetchTrailer = async() => {
        const trailerapi = await fetch('https://api.themoviedb.org/3/' + trailerKey + '/'+ movie_id +'/videos' , API_OPTIONS);
        const json = await trailerapi.json();
        const trailerData = json?.results?.filter(
            (video) => video.type === "Trailer"
          );
        const index = Math.round(Math.random() * trailerData.length);
        const trailer = trailerData?.length > 0 ? trailerData[index] : json.results[0];
        if(path === "home" && trailerKey === "movie"){
            dispatch(addhometrailer(trailer));
        }
        else if( path === "tvShow" && trailerKey === "tv"){
            dispatch(addtvshowtrailer(trailer));
        }
        else if(path === "movie" && trailerKey === "movie"){
            dispatch(addmovietrailer(trailer));
        }
        else if(path === 'new' && trailerKey === "movie"){
            dispatch(addnewtrailer(trailer));
        }
    }
    useEffect(() => {
        fetchTrailer();
    }, []);
}

export default useFetchTrailer