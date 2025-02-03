import { useLoaderData, useNavigate } from "react-router-dom"
import { FaCirclePlay } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { HiCurrencyDollar } from "react-icons/hi2";
import { FaLanguage } from "react-icons/fa";

export const SelectedMovie = () => {

    const loaderdata = useLoaderData()
   
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }

    const baseURL = "https://image.tmdb.org/t/p/w500";

    const formatBudget = (budget) => {
        if (budget >= 1_000_000_000) {
            return `$ ${(budget / 1_000_000_000).toFixed(1)} Billion`;
        } else if (budget >= 1_000_000) {
            return `$ ${(budget / 1_000_000).toFixed(1)} Million`;
        }
        else if(budget === 0){
            return "Not Available"
        }
        return budget.toLocaleString(); // Fallback: Show full number with commas
    };

    return (
        <>
            <div className="selectedPage ">
                <div className="poster">
                    <img src={`${baseURL}${loaderdata.backdrop_path}`} alt={loaderdata.title} className="" />
                </div>

                <div className="data flex flex-col gap-6">
                    <h1 className="text-7xl font-bold">{loaderdata.title}</h1>

                    <h2 className="text-2xl">{loaderdata.tagline}</h2>

                    <p className={`${loaderdata.vote_average.toFixed(1) >= 7 ? "bg-green-500" : "bg-red-500"} w-fit p-2 rounded-xl text-2xl`}><b>Vote: </b>{loaderdata.vote_average.toFixed(1)}</p>

                    <p className="text-2xl"><b className="text-3xl font-extrabold">Genre: </b>{loaderdata.genres.map((genre) => genre.name).join(', ')}</p>

                    <p className="text-2xl"><b className="text-3xl font-extrabold">Overview: </b>{loaderdata.overview}</p>

                    <div className="basedata grid grid-cols-2 gap-4 justify-center w-fit text-2xl py-4 items-center">
                        
                        <p className="flex gap-2 items-center"><span className="text-green-500 bg-white rounded-full" ><FaCirclePlay /></span><b> Runtime: </b>
                            {Math.floor(loaderdata.runtime / 60)}h {loaderdata.runtime % 60}m
                        </p>

                        <p className="flex gap-2 items-center"><span className="text-orange-300 text-3xl"><CiCalendarDate /></span><b>Release date:</b> {loaderdata.release_date}</p>

                        <p className="flex gap-2 items-center"><span className="text-red-500 text-3xl"><HiCurrencyDollar /></span><b>Budget: </b>{formatBudget(loaderdata.budget)}</p>

                        <p className="flex gap-2 items-center"><span className="text-amber-500 text-3xl"><HiCurrencyDollar /></span><b>Revenue: </b>{formatBudget(loaderdata.revenue)}</p>
                    </div>

                    <p className="flex gap-2 items-center text-2xl"><span className="text-4xl text-blue-500"><FaLanguage /></span><b>Available Languages: </b>{loaderdata.spoken_languages.map((langs) => langs.english_name).join(", ")}</p>

                    <button onClick={handleGoBack} className="goBackBtn"><span>Back to Page</span></button>
                </div>
            </div>
        </>
    )
}