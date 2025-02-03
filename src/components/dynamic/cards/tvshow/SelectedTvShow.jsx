import { useLoaderData, useNavigate } from "react-router-dom"
import { BiSolidSlideshow } from "react-icons/bi";
import { LuDrama } from "react-icons/lu";
import { GiDramaMasks } from "react-icons/gi";
import { FcLike } from "react-icons/fc";

export const SelectedTvShow = () => {

    const loaderdata = useLoaderData()

    const navigate = useNavigate()  

    const handleGoBack = () => navigate(-1)

    const baseURL = "https://image.tmdb.org/t/p/w500";

    return (
        <div className="">
            <div className="selectedPage">
                <div className="poster">
                    <img src={`${baseURL}${loaderdata.backdrop_path}`} alt="Poster Not Available" className="text-2xl"/>
                </div>

                <div className="data flex flex-col gap-6">
                    <h1 className="text-7xl font-bold">{loaderdata.name}</h1>

                    <h2 className="text-2xl">{loaderdata.tagline}</h2>

                    <div className="info flex gap-4 items-center">
                        <p className={`${loaderdata.vote_average.toFixed(1) >= 7 ? "bg-green-500" : "bg-red-500"} w-fit p-2 rounded-xl text-2xl`}><b>Vote: </b>{loaderdata.vote_average.toFixed(1)}</p>

                        <p className="bg-pink-400 p-2 rounded-xl text-2xl" ><b>{loaderdata.origin_country}</b></p>
                    </div>

                    <p className="text-2xl"><b className="text-3xl font-extrabold">Genre: </b>{loaderdata.genres.map((genre) => genre.name).join(', ')}</p>

                    <p className="text-2xl"><b className="text-3xl font-extrabold">Overview: </b>{`${loaderdata.overview === "" ? "Not Available" : loaderdata.overview} `}</p>


                    <div className="basedata grid grid-cols-2  gap-6 justify-center items-center text-2xl my-6">

                        <h1 className="flex gap-4 items-center"><span className="text-green-500 text-3xl"><BiSolidSlideshow /></span><b>First Air Date: </b>{loaderdata.first_air_date}</h1>

                        <p className="flex gap-4 items-center"><span className="text-orange-500 text-3xl"><BiSolidSlideshow /></span><b>Last Air Date: </b>{loaderdata.last_air_date}</p>

                        <p className="flex gap-4 items-center"><span className="text-3xl text-red-500"><LuDrama /></span><b>Total Seasons: </b>{loaderdata.number_of_seasons}</p>

                        <p className="flex gap-4 items-center"><span className="text-3xl text-green-500"><GiDramaMasks /></span><b>Total Episodes: </b>{loaderdata.number_of_episodes}</p>
                    </div>

                    <p className="text-2xl"><b>Available Languages: </b>{loaderdata.spoken_languages.map((langs) => langs.english_name).join(', ')}</p>

                <button onClick={handleGoBack} className="goBackBtn"><span>Back to Page</span></button>

                </div>


            </div>
            <h1 className="text-5xl bg-[#111] w-fit pl-4 pr-60 py-3 rounded-xl ml-12 font-extrabold text-slate-300 ">Seasons</h1>
            <ul className="dramaPage">

                {
                    loaderdata.seasons.map((season) => {

                        const formatVote = (vote) => {
                            if (vote === 0) {
                                return (<p className="bg-red-500 flex items-center justify-center py-2 px-4 rounded-xl">Not Available</p>)
                            }   
                            if (vote >= 7) {
                                return (<p className='bg-green-500 flex items-center justify-center py-2 px-4 rounded-xl'>{vote}</p>)
                            }
                        }

                        return (
                            <li key={season.id} className="dramaCard">
                                <h1 className="text-4xl font-extrabold text-center py-4">{season.name}</h1>
                                <img src={`${baseURL}${season.poster_path}`} alt=""/>

                                <div className="p-4 flex flex-col gap-4">
                                    <h1 className="text-2xl flex items-center gap-4"><span className="text-3xl text-green-500"><GiDramaMasks /></span><b className="text-3xl">Total episodes: </b>{season.episode_count}</h1>

                                    <h1 className="text-2xl flex items-center gap-4"><span className="text-blue-500 text-3xl"><BiSolidSlideshow /></span><b className="text-3xl">Air Date: </b>{season.air_date === null ? "Not Available" : season.air_date}</h1>

                                    <h1 className="text-2xl w-fit flex items-center gap-4"><span className="text-3xl"><FcLike /></span><b className="text-3xl">Vote: </b> {formatVote(season.vote_average)}</h1>

                                    <h1 className="text-2xl"><b className="text-3xl">Overview: </b>{`${season.overview === "" ? "Not Availble" : season.overview}`}</h1>
                                </div>

                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}