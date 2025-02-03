export const cardsForKids = async() => {
    const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=16,10751&language=en-IN
`;

    try {
        const res = await fetch(URL)
        const data = await res.json()
        return data
        
    } catch (error) {
        
    }
}

