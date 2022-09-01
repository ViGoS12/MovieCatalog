import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import movie from './slices/movieSlice'

export const store = configureStore({
  reducer: { movie },
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
