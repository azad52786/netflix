import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addnow_playingmovies , addpopularmovies , addupcomingmovies , addtop_ratedmovies } from "../utils/moviesSlice";

const useFetchTvShow = (movieTitle) => {
    const dispatch = useDispatch();
    const fetchMovise = async() => {
        const fetchData = await fetch("https://api.themoviedb.org/3/tv/"+movieTitle+"?page=1" , API_OPTIONS);
        const movies = await fetchData.json();
        // const slicehandeler = ;
        if(movieTitle === "now_playing") dispatch(addnow_playingmovies(movies?.results));
        if(movieTitle === "popular") dispatch(addpopularmovies(movies?.results));
        if(movieTitle === "upcoming") dispatch(addupcomingmovies(movies?.results));
        if(movieTitle === "top_rated"){
            let top = movies?.results.filter((movie , index) => (index < 9))
            dispatch(addtop_ratedmovies(top));
        }
    }
    useEffect(() => {
        fetchMovise();
    },[])
}

export default useFetchTvShow;