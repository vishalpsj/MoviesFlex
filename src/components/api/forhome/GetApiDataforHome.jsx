export const cardsForHome = async() => {

    const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`;

    try {
        const res = await fetch(URL)
        const data = await res.json()
        return data
        
    } catch (error) {
        
    }
}

