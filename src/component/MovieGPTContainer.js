import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import useGeminiAI from "../hooks/useGeminiAI";
import AISearchResults from "./AISearchResults";

const MovieGPTContainer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  
  const movies = useSelector((store) => store?.movies);
  const { searchMoviesWithAI, isLoading, error } = useGeminiAI();

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    if (!process.env.REACT_APP_GEMINI_API_KEY || process.env.REACT_APP_GEMINI_API_KEY === 'your_gemini_api_key_here') {
      alert('Please add your Gemini API key to the .env file');
      return;
    }

    setHasSearched(true);
    const results = await searchMoviesWithAI(searchQuery, movies);
    setSearchResults(results);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col gap-y-4 items-center justify-start bg-gradient-to-b from-blue-700 via-gray-400 to-gray-900 pt-8">
      <div className="w-full h-auto flex flex-col gap-y-4 items-center justify-center px-4">
        <h1 className="sm:text-6xl text-2xl font-bold text-white text-center">
          Let me be your film expert!
        </h1>
        <p className="sm:text-xl text-center brightness-90 text-white">
          AI-Powered Movie Recommendations from Your Library
        </p>
        
        <div className="w-full relative max-w-4xl">
          <div className="flex gap-x-2 w-full mx-auto">
            <FaSearch className="text-white absolute sm:top-[1.5rem] sm:left-[2rem] top-4 left-6 font-bold z-10" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="e.g., 'action movies with high ratings', 'romantic comedies', 'sci-fi thrillers'..."
              className="w-full sm:h-16 h-12 bg-slate-100 text-black font-medium sm:text-lg text-sm opacity-90 outline-none sm:pl-12 pl-10 pr-4 rounded-md focus:ring-2 focus:ring-blue-500 transition-all"
              disabled={isLoading}
            />
            <button 
              onClick={handleSearch}
              disabled={isLoading || !searchQuery.trim()}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 disabled:bg-gray-500 disabled:cursor-not-allowed rounded-md font-bold text-lg text-white transition-colors duration-200"
            >
              {isLoading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </div>

        {(!process.env.REACT_APP_GEMINI_API_KEY || process.env.REACT_APP_GEMINI_API_KEY === 'your_gemini_api_key_here') && (
          <div className="bg-yellow-600 bg-opacity-90 text-black p-4 rounded-lg max-w-2xl text-center">
            <p className="font-semibold">⚠️ Setup Required</p>
            <p className="text-sm mt-1">
              Add your Gemini API key to the .env file to enable AI movie search
            </p>
          </div>
        )}
        <div className="w-full max-w-6xl px-4">
          <AISearchResults 
            movies={searchResults}
            isLoading={isLoading}
            error={error}
            searchQuery={hasSearched ? searchQuery : ""}
          />
        </div>

        {!hasSearched && (
          <div className="min-h-[30vh] max-w-4xl mx-auto">
            <div className="bg-black bg-opacity-50 rounded-lg p-6 mt-8">
              <h2 className="text-2xl sm:text-3xl text-white font-bold mb-4 text-center">
                How it works:
              </h2>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="text-white">
                  <div className="text-4xl mb-2">🎬</div>
                  <h3 className="font-semibold mb-2">Describe Your Mood</h3>
                  <p className="text-sm text-gray-300">
                    Tell us what kind of movie you're in the mood for
                  </p>
                </div>
                <div className="text-white">
                  <div className="text-4xl mb-2">🤖</div>
                  <h3 className="font-semibold mb-2">AI Analysis</h3>
                  <p className="text-sm text-gray-300">
                    Our AI analyzes your request against our movie database
                  </p>
                </div>
                <div className="text-white">
                  <div className="text-4xl mb-2">✨</div>
                  <h3 className="font-semibold mb-2">Perfect Matches</h3>
                  <p className="text-sm text-gray-300">
                    Get personalized recommendations tailored to your taste
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieGPTContainer;
