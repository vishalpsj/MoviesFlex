export const cardsForMovies = async() => {
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`;

    try {
        const res = await fetch(URL)
        const data = await res.json()
        return data
        
    } catch (error) {
        
    }
}

