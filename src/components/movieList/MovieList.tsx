import MovieCard from './../movieCard/'

import styles from './MovieList.module.scss'

type MovieListProps = {
  items: Movie[]
  clickCard: (id: Movie['id']) => void
}

const MovieList: React.FC<MovieListProps> = ({ items, clickCard }) => {
  return (
    <div className={styles.movieList}>
      <div className={styles.movieList__grid}>
        {items.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            image={movie.image}
            title={movie.rank + ' ' + movie.title}
            clickCard={clickCard}></MovieCard>
        ))}
      </div>
    </div>
  )
}

export default MovieList
