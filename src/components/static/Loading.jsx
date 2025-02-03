export const Loading = () => {
    return (
        <>
            <div className="h-lvh text-white text-2xl flex justify-center items-center gap-4">

                <div className="text-center">
                    <div
                        className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"
                    ></div>
                    <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Hang tight, we're getting things ready for you!
                    </p>
                </div>
            </div>
        </>
    )
}