import { NavLink } from "react-router-dom";

export const KidsCard = ({ curMovie, movieId }) => {

    const baseURL = "https://image.tmdb.org/t/p/w500";


    return (
        <>
            <li className="movieCardsPage">
                <NavLink to={`/kids/${movieId}`}>
                    <img src={`${baseURL}${curMovie.poster_path}`} alt="Image poster" />
                </NavLink>
            </li>
        </>
    )
}