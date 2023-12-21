import { useEffect, useState } from "react"
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addhometrailer, addmovietrailer, addnewtrailer, addtvshowtrailer } from "../utils/trailerSlice";
import { useSelect } from "@material-tailwind/react";

const useFetchTrailer = (movie_id , trailerKey , path) => {
    let [trailerData , settrailerData] = useState([]);
    const dispatch = useDispatch();
    
    const dispatch_trailer = (path) => {
        const trailer_dispatch_method = {
            home: addhometrailer,
            tvShow : addtvshowtrailer,
            movie : addmovietrailer,
            new : addnewtrailer
        }
        return  trailer_dispatch_method[path];
    }
    
    const fetchTrailer = async() => {
        try {
            const trailerapi = await fetch('https://api.themoviedb.org/3/' + trailerKey + '/'+ movie_id +'/videos' , API_OPTIONS);
            const json = await trailerapi.json();
            const Data = json?.results?.filter(
                (video) => video.type === "Trailer"
                );
                settrailerData(Data);
                let index = Math.round(Math.random() * trailerData.length);
                if(trailerData.length > 0) index = index + 1;
            const trailer = trailerData?.length > 0 ? trailerData[index] : json.results[0];
            const dispatch_trailer_in_store = dispatch_trailer(path);
            dispatch(dispatch_trailer_in_store(trailer));
        }
        catch(e){
            console.log(e);
        }
    }


    
    useEffect(() => {
         fetchTrailer();
    }, []);
}

export default useFetchTrailer