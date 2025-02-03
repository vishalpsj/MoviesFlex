import { NavLink } from "react-router-dom";

export const MovieCards = ({ curMovie, movieId }) => {

    const baseURL = "https://image.tmdb.org/t/p/w500";


    return (
        <>
            <li className="movieCardsPage text-white">
                <NavLink to={`/${movieId}`}>
                    <img src={`${baseURL}${curMovie.poster_path}`} alt="Image poster" />
                </NavLink>
            </li>
        </>
    )
}