import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Applayout } from "./components/Applayout"
import { Home } from "./components/dynamic/cards/home/Home"
import { Movies } from "./components/dynamic/cards/movies/Movies"
import { TvShows } from "./components/dynamic/cards/tvshow/TvShows"
import { Kids } from "./components/dynamic/cards/kids/Kids"
import { ErrorPage } from "./components/static/ErrorPage"
import { cardsForMovies } from "./components/api/formovies/GetApiDataforMovies"
import { cardsForKids } from "./components/api/forKids/GetApiDataforKids"
import { cardsForTvShows } from "./components/api/fortvshows/GetApiDataforTv"
import { paramsMovies } from "./components/api/formovies/ParamsMovies"
import { paramsKids } from "./components/api/forKids/ParamsKids"
import { paramTvShow } from "./components/api/fortvshows/ParamsTvshow"
import { SelectedMovie } from "./components/dynamic/cards/movies/SelectedMovie"
import { SelectedTvShow } from "./components/dynamic/cards/tvshow/SelectedTvShow"
import { SelectedKidsShow } from "./components/dynamic/cards/kids/SelectedKidsShow"
import { cardsForHome } from "./components/api/forhome/GetApiDataforHome"


export const App = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Applayout />,
      errorElement:<ErrorPage />,
      children:[
        {
          path:"/",
          element: <Home />,
          loader:cardsForHome
        },
        {
          path:"//:movieId",
          element: <SelectedMovie />,
          loader:paramsMovies
        },
        {
          path:"/movies",
          element: <Movies />,
          loader: cardsForMovies
        },
        {
          path:"/movies/:movieId",
          element: <SelectedMovie />,
          loader: paramsMovies
        },
        {
          path:"/tvshows",
          element: <TvShows />,
          loader: cardsForTvShows
        },
        {
          path:"/tvshows/:movieId",
          element: <SelectedTvShow />,
          loader: paramTvShow
        },
        {
          path:"/kids",
          element: <Kids />,
          loader:cardsForKids
        },
        {
          path:"/kids/:movieid",
          element: <SelectedKidsShow />,
          loader:paramsKids
        },

      ]
    }
  ])


  return <RouterProvider router={router}></RouterProvider>
}