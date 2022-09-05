import styles from './MovieList.module.scss'
import MovieCard from './../movieCard/'

type MovieListProps = {
  items: Movie[]
}

const MovieList: React.FC<MovieListProps> = ({ items }) => {
  return (
    <div className={styles.movieList}>
      {items.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          image={movie.image}
          title={movie.title}
        />
      ))}
    </div>
  )
}

export default MovieList
