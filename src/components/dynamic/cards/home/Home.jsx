import { useLoaderData } from "react-router-dom"
import { HomeCards } from "./HomeCards";
import { HomeSlider } from "./HomeSlider";

export const Home = () => {

    const loaderData = useLoaderData()

    return (
        <>
            <div className="movieContainer h-lvh">
                <div className="slider">
                    {
                        <HomeSlider loaderData={loaderData} movieId={loaderData.results.map((curMovie) => curMovie.id)} />
                    }
                </div>
                
                <h1>Popular Movies</h1>
                <ul className="moviesPage">
                    {
                        loaderData.results.map((curMovie) => {
                            return (
                                <HomeCards key={curMovie.id} movieId={curMovie.id} curMovie={curMovie} />
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}