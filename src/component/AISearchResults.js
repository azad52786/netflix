import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { IMG_CDN_URL } from '../utils/constant';
import { GrNext, GrPrevious } from "react-icons/gr";

const AIMovieCard = ({ movie, onClick }) => {
  if (!movie) return null;

  return (
    <div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-[320px] h-[520px] flex-shrink-0 cursor-pointer hover:scale-105 transform flex flex-col"
      onClick={() => onClick(movie)}
    >
      <div className="relative flex-shrink-0">
        <img
          src={movie.poster_path ? `${IMG_CDN_URL}${movie.poster_path}` : '/images/404.png'}
          alt={movie.title}
          className="w-full h-[360px] object-cover"
          onError={(e) => {
            e.target.src = '/images/404.png';
          }}
        />
        <div className="absolute top-2 right-2 bg-black bg-opacity-70 rounded-full px-2 py-1">
          <span className="text-yellow-400 text-sm font-bold">
            ⭐ {movie.vote_average?.toFixed(1)}
          </span>
        </div>
        <div className="absolute top-2 left-2 bg-blue-600 bg-opacity-90 rounded px-2 py-1">
          <span className="text-white text-xs font-medium capitalize">
            {movie.category?.replace('_', ' ')}
          </span>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
          <div className="text-white text-4xl opacity-0 hover:opacity-100 transition-opacity duration-300">
            ▶️
          </div>
        </div>
      </div>
      
      <div className="p-4 gap-2 flex flex-col h-[160px]">
        <h3 className="text-white font-bold text-lg line-clamp-2 flex-shrink-0 max-h-[56px]">
          {movie.title}
        </h3>
        
        <p className="text-gray-300 text-sm line-clamp-3 flex-1 overflow-hidden">
          {movie.overview || 'No description available.'}
        </p>
        
        <div className="flex justify-between items-center text-xs text-gray-400 mt-auto flex-shrink-0">
          <span>{movie.release_date?.substring(0, 4)}</span>
          <span className={`px-2 py-1 rounded ${movie.adult ? 'bg-red-600' : 'bg-green-600'} text-white`}>
            {movie.adult ? '18+' : 'All Ages'}
          </span>
        </div>
      </div>
    </div>
  );
};

const AISearchResults = ({ movies, isLoading, error, searchQuery }) => {
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();

  const handleMovieClick = (movie) => {
    const movieKey = movie.category === 'tv' ? 'tv' : 'movie'; 
    navigate(`/watch/${movieKey}/${movie.id}`);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = 660; 
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = 660;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
        <span className="text-white ml-4">AI is analyzing your request...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-red-500 text-lg font-semibold mb-2">
          Oops! Something went wrong
        </div>
        <p className="text-gray-400">{error}</p>
      </div>
    );
  }

  if (!movies || movies.length === 0) {
    return searchQuery ? (
      <div className="text-center py-8">
        <div className="text-gray-400 text-lg">
          No movies found matching your request: "{searchQuery}"
        </div>
        <p className="text-gray-500 mt-2">Try a different search query</p>
      </div>
    ) : null;
  }

  return (
    <div className="mt-8">
      <h2 className="text-white text-2xl font-bold mb-6 text-center">
        AI Recommendations for: "{searchQuery}"
      </h2>
      
      <div className="relative group">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
          style={{ marginTop: '-20px' }}
        >
          <GrPrevious className="text-xl" />
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
          style={{ marginTop: '-20px' }}
        >
          <GrNext className="text-xl" />
        </button>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-hidden space-x-6 pb-4 scroll-smooth px-12"
        >
          {movies.map((movie, index) => (
            <AIMovieCard 
              key={`${movie.id}-${index}`} 
              movie={movie} 
              onClick={handleMovieClick}
            />
          ))}
        </div>
      </div>
      
      <div className="text-center mt-4">
        <p className="text-gray-400 text-sm">
          Found {movies.length} movie{movies.length !== 1 ? 's' : ''} matching your preferences
        </p>
        <p className="text-gray-500 text-xs mt-1">
          Click on any movie card to watch the trailer
        </p>
      </div>
    </div>
  );
};

export default AISearchResults;
