import { useLoaderData } from "react-router-dom"
import { MovieCards } from "./MovieCards";

export const Movies = () => {

    const moviesData = useLoaderData()
  
    return (
        <>
            <div className="movieContainer h-lvh">
                <h1>Popular Movies</h1>
                <ul className="moviesPage">
                    {
                        moviesData.results.map((curMovie) => {
                            return (
                                <MovieCards key={curMovie.id} movieId={curMovie.id} curMovie={curMovie} />
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}