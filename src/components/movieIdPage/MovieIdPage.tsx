import styles from './MovieIdPage.module.scss'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useEffect } from 'react'
import { fetchMovie } from './../../redux/slices/movieIdSlice'
import { useAppDispatch } from './../../redux/store'

const MovieIdPage = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams()

  const { movie } = useSelector((state: RootState) => state.movie)

  const getMovie = async () => {
    dispatch(fetchMovie(id ?? ''))
  }

  useEffect(() => {
    getMovie()
  }, [])

  return <div className={styles.movieIdPage}>{movie.title}</div>
}

export default MovieIdPage
