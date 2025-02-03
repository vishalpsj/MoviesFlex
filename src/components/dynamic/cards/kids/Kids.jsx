import { useLoaderData } from "react-router-dom"
import { KidsCard } from "./KidsCard";

export const Kids = () => {

    const kidsContent = useLoaderData()

    return (
        <>
            <div className="movieContainer h-lvh">
            <h1>Popular Kids Movies</h1>
                <ul className="moviesPage">
                    {
                        kidsContent.results.map((curMovie) => {
                            return (
                                <KidsCard key={curMovie.id} movieId={curMovie.id} curMovie={curMovie} />
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}