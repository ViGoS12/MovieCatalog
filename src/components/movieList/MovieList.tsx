import SkeletonMovieCard from '../movieCard/SkeletonMovieCard'
import MovieCard from './../movieCard/'

import styles from './MovieList.module.scss'

type MovieListProps = {
  items: Movie[]
  clickCard: (id: Movie['id']) => void
  status: string
}

const MovieList: React.FC<MovieListProps> = ({ items, clickCard, status }) => {
  return (
    <div className={styles.movieList}>
      <div className={styles.movieList__grid}>
        {status === 'loading'
          ? [...new Array(21)].map((_, i) => (
              <div key={i} className={styles.movieList__skeleton}>
                <SkeletonMovieCard />
              </div>
            ))
          : items.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                image={movie.image}
                title={movie.rank + ' ' + movie.title}
                clickCard={clickCard}
              />
            ))}
      </div>
    </div>
  )
}

export default MovieList
