import { useEffect } from 'react'

import { RootState, useAppDispatch } from '../redux/store'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { fetchTop250Movies } from '../redux/slices/top250MoviesSlice'

import styles from './scss/TopMovies.module.scss'

import MovieList from './../components/movieList/index'

const TopMovies: React.FC = () => {
  const router = useNavigate()
  const dispatch = useAppDispatch()

  const top250Movies = useSelector(
    (state: RootState) => state.top250Movies.items
  )

  const getMovies = async () => {
    dispatch(fetchTop250Movies())
  }

  const clickCard = (id: Movie['id']) => {
    router(`/movie/${id}`)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className={styles.topMovies}>
      <div className={styles.topMovies__pageTitle}> Rating Top 250 movies</div>
      <MovieList items={top250Movies} clickCard={clickCard} />
    </div>
  )
}

export default TopMovies
