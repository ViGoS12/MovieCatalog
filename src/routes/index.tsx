import Home from './../pages/Home'
import TopMovies from './../pages/TopMovies'
import MovieIdPage from './../components/movieIdPage/'

export const publicRoutes = [
  { path: '', element: <Home /> },
  { path: '/rating/top250', element: <TopMovies /> },
  { path: '/movie/:id', element: <MovieIdPage /> },
]
