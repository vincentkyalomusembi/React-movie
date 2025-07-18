const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"

// Debug logging for production
if (!API_KEY) {
    console.error('TMDB API Key is not defined. Please check your environment variables.');
}

export const getPopularMovies = async () => {
    try {
        if (!API_KEY) {
            throw new Error('TMDB API Key is not configured');
        }
        
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching popular movies:', error);
        throw error;
    }
};

export const searchMovies = async (query) => {
    try {
        if (!API_KEY) {
            throw new Error('TMDB API Key is not configured');
        }
        
        const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error searching movies:', error);
        throw error;
    }
};