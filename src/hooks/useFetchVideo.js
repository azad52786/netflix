import React, { useEffect, useState } from 'react'
import { API_OPTIONS, VIDEO_API } from '../utils/constant';


const useFetchVideo = (movieKey , movieId) => {
    let [video_key , setVideo_key] =useState(null);
    useEffect(() => {
        const fetchvideo = async() => {
            const api_data = await fetch(VIDEO_API + movieKey + "/" + movieId + "/videos" , API_OPTIONS);
            const result = await api_data.json();
            console.log(result?.results[0]?.key);
            const videos = result?.results;
            let index = Math.round(Math.random() * videos?.length);
            if(index > 0){
              index = index- 1;
            }
            setVideo_key(videos[index]?.key)
            console.log(video_key);
        }
        fetchvideo();
    },[])
    return video_key;
}

export default useFetchVideo