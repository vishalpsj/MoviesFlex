export const paramsMovies = async({params}) => {
    
    const movieid = params.movieId

    const URL = `https://api.themoviedb.org/3/movie/${movieid}?api_key=${import.meta.env.VITE_API_KEY}&language=en-IN`;
 
    try {
        const res = await fetch(URL)
        const data = await res.json()
        return data
        
    } catch (error) {
        
    }
}

