import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext()

// Custom hook for using movie context
// eslint-disable-next-line react-refresh/only-export-components
export const useMovieContext = () => {
    const context = useContext(MovieContext);
    if (!context) {
        throw new Error('useMovieContext must be used within a MovieProvider');
    }
    return context;
}

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    // Load favorites from localStorage on mount
    useEffect(() => {
        try {
            const storedFavs = localStorage.getItem("favorites");
            if (storedFavs) {
                const parsedFavs = JSON.parse(storedFavs);
                if (Array.isArray(parsedFavs)) {
                    setFavorites(parsedFavs);
                }
            }
        } catch (error) {
            console.error('Error loading favorites from localStorage:', error);
        } finally {
            setIsLoaded(true);
        }
    }, [])

    // Save favorites to localStorage when favorites change (but not on initial load)
    useEffect(() => {
        if (isLoaded) {
            try {
                localStorage.setItem("favorites", JSON.stringify(favorites));
            } catch (error) {
                console.error('Error saving favorites to localStorage:', error);
            }
        }
    }, [favorites, isLoaded])

    const addFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addFavorites,
        removeFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}