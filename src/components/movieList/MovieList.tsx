import MovieCard from './../movieCard/'

import styles from './MovieList.module.scss'
import { useNavigate } from 'react-router-dom'

type MovieListProps = {
  items: Movie[]
}

const MovieList: React.FC<MovieListProps> = ({ items }) => {
  const router = useNavigate()

  const clickCard = (id: Movie['id']) => {
    router(`/movie/${id}`)
  }
  return (
    <div className={styles.movieList}>
      {/* {items.map((movie) => (
        <MovieCard
          id={movie.id}
          image={movie.image}
          title={movie.title}
          clickCard={clickCard}
        />
      ))} */}
    </div>
  )
}

export default MovieList
