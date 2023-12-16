import CardImagelist , { TopRated } from './CardImagelist'
import React, { useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import Shimmer from './Shimmer';
import MovieCardShimmer from './MovieCardShimmer';
const MovieCard = ({title , movies , id}) => {
    const [sliderbtn , setSliderbtn] = useState(false);
    const [leftSliderbutton , setLeftSliderbutton] = useState(false);
    const [rightSliderbutton , setRightSliderbutton] = useState(true);
    const TopMovies = TopRated(CardImagelist);
    // console.log(movies)
    if(!movies) return <MovieCardShimmer/>;
    const slider = document.querySelector(`#${id}`);
    function sliderLeftHandeler() {
        let width = slider.clientWidth;
        slider.scrollLeft = slider.scrollLeft - width/3;
        if(leftSliderbutton){
            if(slider.scrollLeft < width/3){
                setLeftSliderbutton(false)
            }
        }
        if(!rightSliderbutton){
            if(slider.scrollLeft <= 1868){
                setRightSliderbutton(true)
            }
        }
      }
    function sliderRightHandeler() {
        let width = slider.clientWidth;
        slider.scrollLeft = slider.scrollLeft + width/3;
        if(!leftSliderbutton){ 
            if(slider.scrollLeft >= 0) setLeftSliderbutton(true)
        }
        if(rightSliderbutton){
            console.log(slider.scrollLeft);
            if(slider.scrollLeft > 1437 ){
                setRightSliderbutton(false);
            }
        }
      }
  return (
    <div className='text-white'
    onMouseEnter={() => setSliderbtn(true)}
    onMouseLeave={() => setSliderbtn(false)}
    >
        <h1 className=' text-2xl mb-3 mt-5'>{title}</h1>
        <div className=' relative rounded-md pr-1'>
            {
                sliderbtn && leftSliderbutton && 
            <button className=' absolute top-0 bg-gradient-to-r from-black duration-100 font-bold text-3xl 
            p-2 text-white h-full rounded-sm z-10'
                onClick={sliderLeftHandeler}
                ><GrPrevious className=' hover:scale-[1.3] duration-200'/>
            </button>
            }
            <div className='flex gap-x-3 overflow-hidden scroll-smooth' id={id}>
                {
                    movies?.map((movie , index) => (title === "top_rated"  
                    ? (<TopMovies key={movie?.id} index={index+1} movie = {movie}/>)
                    : (<CardImagelist key={movie?.id}  movie = {movie}/> )
                    ))
                }
            </div>
            {
                sliderbtn && rightSliderbutton && 
            <button className=' absolute right-0 top-0 bg-gradient-to-l from-black duration-100 font-bold text-3xl 
                    p-2 text-white h-full mr-1 rounded-sm'
            onClick={sliderRightHandeler}
                ><GrNext className=' hover:scale-[1.3] duration-200'/>
            </button>
            }
        </div>
    </div>
  )
}

export default MovieCard