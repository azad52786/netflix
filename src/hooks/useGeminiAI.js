import { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const useGeminiAI = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMoviesWithAI = async (userPrompt, movieData) => {
    setIsLoading(true);
    setError(null);

    try {
      const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const allMovies = [];
      
      if (movieData?.now_playing) {
        allMovies.push(...movieData.now_playing.map(movie => ({
          ...movie,
          category: 'now_playing'
        })));
      }
      if (movieData?.popular) {
        allMovies.push(...movieData.popular.map(movie => ({
          ...movie,
          category: 'popular'
        })));
      }
      if (movieData?.top_rated) {
        allMovies.push(...movieData.top_rated.map(movie => ({
          ...movie,
          category: 'top_rated'
        })));
      }
      if (movieData?.upcoming) {
        allMovies.push(...movieData.upcoming.map(movie => ({
          ...movie,
          category: 'upcoming'
        })));
      }

      if (allMovies.length === 0) {
        throw new Error('No movie data available. Please load movies first.');
      }

      const moviesForAI = allMovies.map(movie => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview?.substring(0, 150), 
        genre_ids: movie.genre_ids,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        adult: movie.adult,
        category: movie.category
      }));

      const genreMap = {
        28: "Action", 35: "Comedy", 18: "Drama", 27: "Horror", 
        10749: "Romance", 878: "Science Fiction", 53: "Thriller",
        16: "Animation", 80: "Crime", 14: "Fantasy", 36: "History",
        10402: "Music", 9648: "Mystery", 10751: "Family", 37: "Western",
        10752: "War", 99: "Documentary"
      };

      const prompt = `
        You are a movie recommendation expert. Based on the user's request: "${userPrompt}"
        
        Please analyze the following movie data and recommend movies that best match the user's request.
        Consider factors like genre, rating, release date, and movie description.
        
        Available movies (first 40 for analysis):
        ${JSON.stringify(moviesForAI.slice(0, 40), null, 2)}
        
        Genre IDs mapping: ${JSON.stringify(genreMap)}
        
        Return ONLY a JSON array of movie IDs that match the user's request, ordered by relevance.
        Example format: [123, 456, 789]
        
        Rules:
        - Maximum 8 recommendations
        - Choose movies that best match the user's criteria
        - Consider genre, rating, and description relevance
        - If user mentions specific genres, prioritize those
        - If user mentions rating preferences, consider vote_average
        - No explanations, just the JSON array
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const aiResponse = response.text();
      
      let recommendedMovieIds = [];
      try {
        const cleanResponse = aiResponse.trim().replace(/```json|```/g, '');
        recommendedMovieIds = JSON.parse(cleanResponse);
      } catch (parseError) {
        const matches = aiResponse.match(/\d+/g);
        recommendedMovieIds = matches ? matches.slice(0, 8).map(Number) : [];
      }

      const recommendedMovies = allMovies.filter(movie => 
        recommendedMovieIds.includes(movie.id)
      );

      if (recommendedMovies.length === 0) {
        const keywords = userPrompt.toLowerCase();
        const fallbackMovies = allMovies.filter(movie => {
          const title = movie.title?.toLowerCase() || '';
          const overview = movie.overview?.toLowerCase() || '';
          return title.includes(keywords) || overview.includes(keywords);
        }).slice(0, 5);
        
        setIsLoading(false);
        return fallbackMovies;
      }

      setIsLoading(false);
      return recommendedMovies;

    } catch (err) {
      console.error('Gemini AI Error:', err);
      setError(err.message || 'Failed to get AI recommendations');
      setIsLoading(false);
      return [];
    }
  };

  return {
    searchMoviesWithAI,
    isLoading,
    error
  };
};

export default useGeminiAI;
