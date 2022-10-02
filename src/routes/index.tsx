import Home from './../pages/Home'
import TopMovies from './../pages/TopMovies'
import MovieIdPage from '../pages/movieIdPage'
import PersonIdPage from '../pages/personIdPage'
import ErrorPage from './../pages/ErrorPage'

export const publicRoutes = [
  { path: '/', element: <Home /> },
  { path: '/rating/top250', element: <TopMovies /> },
  { path: '/movie/:id', element: <MovieIdPage /> },
  { path: '/person/:id', element: <PersonIdPage /> },
  { path: '*', element: <ErrorPage /> },
]
