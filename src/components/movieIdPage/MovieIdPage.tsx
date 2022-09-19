import styles from './MovieIdPage.module.scss'
import { useParams } from 'react-router-dom'
import { setMovie } from '../../redux/slices/comingSoonMoviesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useEffect } from 'react'

const MovieIdPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(setMovie(id ?? ''))
  }, [])

  const { movie } = useSelector((state: RootState) => state.comingSoonMovies)

  return <div className={styles.movieIdPage}>{movie.title}</div>
}

export default MovieIdPage
