import CardImagelist , { TopRated } from './CardImagelist'
import React, { useState, useRef } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import MovieCardShimmer from './MovieCardShimmer';

const MovieCard = ({title , movies , id , path}) => {
    const [sliderbtn , setSliderbtn] = useState(false);
    const scrollContainerRef = useRef(null);
    const TopMovies = TopRated(CardImagelist);
    
    if(!movies) return <MovieCardShimmer/>;

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth / 2;
            scrollContainerRef.current.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth / 2;
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const checkScrollButtons = () => {
    };

    return (
        <div className='text-white'
            onMouseEnter={() => setSliderbtn(true)}
            onMouseLeave={() => setSliderbtn(false)}
        >
            <h1 className=' sm:text-2xl text-lg mb-1 sm:mt-5'>{title}</h1>
            <div className=' relative rounded-md pr-1 group'>
                {sliderbtn && (
                    <button 
                        className='h-[210px] absolute top-3 left-0 hidden sm:block bg-gradient-to-r from-black hover:from-gray-800 duration-200 font-bold text-lg sm:text-3xl p-2 text-white rounded-sm z-10 opacity-80 hover:opacity-100 transition-all'
                        onClick={scrollLeft}
                    >
                        <GrPrevious className=' hover:scale-[1.3] duration-200'/>
                    </button>
                )}

                <div 
                    ref={scrollContainerRef}
                    className="flex sm:gap-x-3 gap-x-2 scroll-smooth sm:overflow-x-hidden overflow-x-scroll -mt-3 sm:mt-0 px-2" 
                    id={id}
                    onScroll={checkScrollButtons}
                >
                    {
                        movies?.map((movie , index) => (title === "top_rated"  
                        ? (<TopMovies key={movie?.id} index={index+1} movie = {movie} path = {path} id={movie?.id} />)
                        : (<CardImagelist key={movie?.id}  movie = {movie} path = {path} id={movie?.id} /> )
                        ))
                    }
                </div>

                {sliderbtn && (
                    <button 
                        className='h-[210px] hidden sm:block absolute right-0 top-3 bg-gradient-to-l from-black hover:from-gray-800 duration-200 font-bold text-3xl p-2 text-white mr-1 rounded-sm z-10 opacity-80 hover:opacity-100 transition-all'
                        onClick={scrollRight}
                    >
                        <GrNext className=' hover:scale-[1.3] duration-200'/>
                    </button>
                )}
            </div>
        </div>
    )
}

export default MovieCard