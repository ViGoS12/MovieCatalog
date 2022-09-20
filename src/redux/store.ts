import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import comingSoonMovies from './slices/comingSoonMoviesSlice'
import top250Movies from './slices/top250MoviesSlice'
import movie from './slices/movieIdSlice'

export const store = configureStore({
  reducer: {
    comingSoonMovies,
    top250Movies,
    movie,
  },
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
