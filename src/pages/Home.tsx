import { useEffect } from 'react'

import { RootState, useAppDispatch } from '../redux/store'
import { useSelector } from 'react-redux'
import { fetchComingSoonMovies } from '../redux/slices/comingSoonMoviesSlice'
import { fetchTop250Movies } from '../redux/slices/top250MoviesSlice'

import styles from './scss/Home.module.scss'

import MovieGallery from '../components/movieGallery'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
  const router = useNavigate()
  const dispatch = useAppDispatch()
  const top250Movies = useSelector(
    (state: RootState) => state.top250Movies.items
  )
  const statusTop250Movies = useSelector(
    (state: RootState) => state.top250Movies.loadingStatus
  )

  const comingSoonMovies = useSelector(
    (state: RootState) => state.comingSoonMovies.items
  )
  const statusComingSoonMovies = useSelector(
    (state: RootState) => state.comingSoonMovies.loadingStatus
  )

  const clickCard = (id: Movie['id']) => {
    router(`/movie/${id}`)
  }

  const getComingSoonMovies = async () => {
    dispatch(fetchComingSoonMovies())
  }

  const getTop250Movies = async () => {
    dispatch(fetchTop250Movies())
  }

  useEffect(() => {
    getComingSoonMovies()
    getTop250Movies()
  }, [])

  console.log(top250Movies)
  return (
    <div className={styles.home}>
      <div className='app__container'>
        <MovieGallery
          items={top250Movies}
          clickCard={clickCard}
          title='Top 250 Movies'
          status={statusTop250Movies}
          cardWrapperWidth='160px'
        />
        <MovieGallery
          items={comingSoonMovies}
          clickCard={clickCard}
          status={statusComingSoonMovies}
          cardWrapperWidth='160px'
        />
      </div>
    </div>
  )
}

export default Home
