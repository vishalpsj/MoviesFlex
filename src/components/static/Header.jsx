import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <>
            <nav>
                <div>
                    <h1 className="text-red-600">MoviesFlex</h1>
                </div>
                <ul className="flex gap-16 font-bold">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/movies">Movies</NavLink></li>
                    <li><NavLink to="/tvshows">TV Shows</NavLink></li>
                    <li><NavLink to="/kids">Kids</NavLink></li>
                </ul>
            </nav>
        </>
    )
}