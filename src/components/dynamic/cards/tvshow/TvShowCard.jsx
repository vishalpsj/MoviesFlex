import { NavLink } from "react-router-dom";

export const TvShowCard = ({ curMovie, movieId }) => {

    const baseURL = "https://image.tmdb.org/t/p/w500";


    return (
        <>
            <li className="movieCardsPage">
                <NavLink to={`/tvshows/${movieId}`}>
                    <img src={`${baseURL}${curMovie.poster_path}`} alt="Image poster" />
                </NavLink>
            </li>
        </>
    )
}