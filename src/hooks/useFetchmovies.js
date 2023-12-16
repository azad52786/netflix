import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addnow_playingmovies , addpopularmovies , addupcomingmovies , addtop_ratedmovies } from "../utils/moviesSlice";
import { addairing_todaytv, addon_the_airtv, addpopulartv, addtop_ratedtv } from "../utils/tvShowSlice";

const useFetchmovies = (path , movieArr , trailerKey) => {
    const dispatch = useDispatch();
    const fetchMovise = async(movieTitle) => {
        const fetchData = await fetch("https://api.themoviedb.org/3/"+ trailerKey +"/"+movieTitle+"?page=1" , API_OPTIONS);
        const movies = await fetchData.json();
        // const slicehandeler = ;
        if(path === "home"){
            if(movieTitle === "now_playing") dispatch(addnow_playingmovies(movies?.results));
            if(movieTitle === "popular") dispatch(addpopularmovies(movies?.results));
            if(movieTitle === "upcoming") dispatch(addupcomingmovies(movies?.results));
            if(movieTitle === "top_rated"){
                let top = movies?.results.filter((movie , index) => (index < 9))
                dispatch(addtop_ratedmovies(top));
            }
        }
        else if(path === "tvShow"){
            if(movieTitle === "airing_today") dispatch(addairing_todaytv(movies?.results));
            if(movieTitle === "popular") dispatch(addpopulartv(movies?.results));
            if(movieTitle === "on_the_air") dispatch(addon_the_airtv(movies?.results));
            if(movieTitle === "top_rated"){
                let top = movies?.results.filter((movie , index) => (index < 9))
                dispatch(addtop_ratedtv(top));
            }
        }
    }
    useEffect(() => {
        for( let movieTitle in movieArr){
            fetchMovise(movieArr[movieTitle]);
        }
    },[])
}

export default useFetchmovies;