import styles from './MovieIdPage.module.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useEffect } from 'react'
import { fetchMovie, fetchTrailer } from '../../redux/slices/movieIdSlice'
import { useAppDispatch } from '../../redux/store'

import MovieGallery from '../../components/movieGallery/index'
import CastMovieGallery from '../../components/castMovieGallery'
import ErrorPage from '../ErrorPage'

const MovieIdPage = () => {
  const router = useNavigate()
  const dispatch = useAppDispatch()
  const { id } = useParams()

  const { movie, loadingMovieStatus, trailer, loadingTrailerStatus } =
    useSelector((state: RootState) => state.movie)

  const getMovie = async () => {
    dispatch(fetchMovie(id ?? ''))
  }

  const getTrailer = async () => {
    dispatch(fetchTrailer(id ?? ''))
  }

  const clickMovieCard = (id: Movie['id']) => {
    router(`/movie/${id}`)
  }

  const clickPersonCard = (id: Movie['id']) => {
    router(`/person/${id}`)
  }

  useEffect(() => {
    getMovie()
    getTrailer()
  }, [id])

  return (
    <>
      {movie.errorMessage ? (
        <ErrorPage errorMessage={movie.errorMessage} />
      ) : (
        <div className={styles.movieIdPage}>
          <div className={styles.movieIdPage__container}>
            <div className={styles.movieIdPage__leftside}>
              <img
                className={styles.movieIdPage__img}
                src={movie.image}
                alt=''
              />
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
                {movie.genreList.map((genre) => (
                  <li key={genre.key} className={styles.watchParams__item}>
                    {genre.value}
                  </li>
                ))}
              </ul>
              <p>{movie.plot}</p>
              <div className={styles.movieIdPage__line}></div>
              <div className={styles.watchOptions}>
                <div className={styles.watchOptions__title}>Language</div>
                <div className={styles.watchOptions__values}>
                  {movie.languages}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.movieIdPage__flexImg}>
            <MovieGallery
              items={movie.similars}
              clickCard={clickMovieCard}
              title={`With the movie «${movie.title}» watch`}
              status={loadingMovieStatus}
            />
          </div>

          <div className={styles.movieInfo}>
            <div className={styles.movieInfo__directors}>
              Diectors: {movie.directorList.map((directors) => directors.name)}
            </div>

            <div className={styles.movieInfo__actors}>
              <CastMovieGallery
                items={movie.actorList}
                clickCard={clickPersonCard}
                title='Actors'
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MovieIdPage
