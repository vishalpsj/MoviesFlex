import { NavLink, useNavigate } from "react-router-dom"
import { GrFormPreviousLink } from "react-icons/gr";

export const ErrorPage = () => {

    const navigate = useNavigate()

    const handleGoback = () => {
        navigate(-1)
    }

    return (
        <>
            <div className="h-lvh flex flex-col gap-4 justify-center items-center relative text-slate-300">
                <h1 className="text-3xl font-bold">Error - 404</h1>
                <h1 className="text-2xl font-bold">Something went wrong!</h1>
                <div className="flex-col gap-4 w-full flex items-center justify-center">
                    <div
                        className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
                    >
                        <div
                            className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
                        ></div>
                    </div>
                </div>

                <button onClick={handleGoback} className="border px-6 py-3 rounded-2xl text-4xl bg-white text-black font-bold mt-4 hover:bg-black hover:text-white transition-all duration-200 ease-linear flex items-center justify-center gap-2 absolute bottom-40"> <GrFormPreviousLink />Back to Page</button>

            </div>
        </>
    )
}
