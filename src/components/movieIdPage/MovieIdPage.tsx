import styles from './MovieIdPage.module.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useEffect } from 'react'
import { fetchMovie } from './../../redux/slices/movieIdSlice'
import { useAppDispatch } from './../../redux/store'

import MovieGallery from './../movieGallery/index'

const MovieIdPage = () => {
  const router = useNavigate()
  const dispatch = useAppDispatch()
  const { id } = useParams()

  const { movie } = useSelector((state: RootState) => state.movie)

  const getMovie = async () => {
    dispatch(fetchMovie(id ?? ''))
  }

  const clickCard = (id: Movie['id']) => {
    router(`/movie/${id}`)
  }

  useEffect(() => {
    getMovie()
  }, [id])

  return (
    <div className={styles.movieIdPage}>
      <div className={styles.movieIdPage__container}>
        <div className={styles.movieIdPage__leftside}>
          <img className={styles.movieIdPage__img} src={movie.image} alt='' />
        </div>
        <div className={styles.movieIdPage__rightside}>
          <div className={styles.movieIdPage__title}>
            {movie.type} {movie.fullTitle}
          </div>
          <ul className={styles.watchParams__list}>
            <li className={styles.watchParams__item}>{movie.year}</li>
            <li className={styles.watchParams__item}>{movie.runtimeStr}</li>
            <li className={styles.watchParams__item}>
              Rating {movie.contentRating}
            </li>
          </ul>
          <ul className={styles.watchParams__list}>
            <li className={styles.watchParams__item}>{movie.countries}</li>
          </ul>
          <p>{movie.plot}</p>
        </div>
      </div>

      <div className={styles.movieIdPage__flexImg}>
        <MovieGallery
          items={movie.similars}
          clickCard={clickCard}
          title={`With the movie «${movie.title}» watch`}
        />
      </div>
    </div>
  )
}

export default MovieIdPage
