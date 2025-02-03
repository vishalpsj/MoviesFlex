import { useLoaderData } from "react-router-dom"
import { TvShowCard } from "./TvShowCard";


export const TvShows = () => {

    const tvshowContent = useLoaderData()

    // console.log(tvshowContent);
    

    return (
        <>
            <div className="movieContainer h-lvh">
                <h1>Popular TV Shows</h1>
                <ul className="moviesPage">
                    {
                        tvshowContent.results.map((curMovie) => {
                            return (
                                <TvShowCard key={curMovie.id} movieId={curMovie.id} curMovie={curMovie} />
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}