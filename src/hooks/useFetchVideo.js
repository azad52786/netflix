import React, { useEffect, useState } from 'react'
import { API_OPTIONS, VIDEO_API } from '../utils/constant';


const useFetchVideo = (movieKey , movieId) => {
    let [video_key , setVideo_key] =useState(null);
    useEffect(() => {
        const fetchvideo = async() => {
            try{
                const api_data = await fetch(VIDEO_API + movieKey + "/" + movieId + "/videos" , API_OPTIONS);
                const result = await api_data.json();
                const videos = result?.results;
                let index = Math.round(Math.random() * videos?.length);
                if(index > 0){
                  index = index- 1;
                }
                setVideo_key(videos[index]?.key)
            }
            catch(e){
                console.log(e);
            }
        }
        fetchvideo();
    },[])
    return video_key;
}

export default useFetchVideo