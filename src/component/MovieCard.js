import CardImagelist , { TopRated } from './CardImagelist'
import React, { useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import MovieCardShimmer from './MovieCardShimmer';
const MovieCard = ({title , movies , id , path}) => {
    const [sliderbtn , setSliderbtn] = useState(false);
    const [leftSliderbutton , setLeftSliderbutton] = useState(false);
    const [rightSliderbutton , setRightSliderbutton] = useState(true);
    const TopMovies = TopRated(CardImagelist);
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
        <h1 className=' sm:text-2xl text-lg mb-1 sm:mt-5'>{title}</h1>
        <div className=' relative rounded-md pr-1'>
            {
                sliderbtn && leftSliderbutton && 
            <button className='h-[210px] absolute top-3 bg-gradient-to-r from-black duration-100 font-bold text-lg sm:text-3xl 
            p-2 text-white rounded-sm z-10'
                onClick={sliderLeftHandeler}
                ><GrPrevious className=' hover:scale-[1.3] duration-200'/>
            </button>
            }
            <div className= "flex sm:gap-x-3 gap-x-2 scroll-smooth overflow-hidden -mt-3 sm:mt-0" id={id}>
                {
                    movies?.map((movie , index) => (title === "top_rated"  
                    ? (<TopMovies key={movie?.id} index={index+1} movie = {movie} path = {path} id={movie?.id} />)
                    : (<CardImagelist key={movie?.id}  movie = {movie} path = {path} id={movie?.id} /> )
                    ))
                }
            </div>
            {
                sliderbtn && rightSliderbutton && 
            <button className='h-[210px] absolute right-0 top-3 bg-gradient-to-l from-black duration-100 font-bold text-3xl 
                    p-2 text-white mr-1 rounded-sm'
            onClick={sliderRightHandeler}
                ><GrNext className=' hover:scale-[1.3] duration-200'/>
            </button>
            }
        </div>
    </div>
  )
}

export default MovieCard