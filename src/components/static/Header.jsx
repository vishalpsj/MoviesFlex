import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
// import { MdMenu } from "react-icons/md";

export const Header = () => {

    const [ismenuOpen, setismenuOpen] = useState(false)

    return (
        <nav>
            <div>
                <h1 className="text-red-600">
                    <Link to="/">MoviesFlex</Link>
                </h1>
            </div>
            <div className="menu" onClick={() => {
                setismenuOpen(!ismenuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`menuItems ${ismenuOpen? "open": ""}`}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/movies">Movies</NavLink></li>
                <li><NavLink to="/tvshows">TV Shows</NavLink></li>
                <li><NavLink to="/kids">Kids</NavLink></li>
            </ul>
        </nav>
    )
}