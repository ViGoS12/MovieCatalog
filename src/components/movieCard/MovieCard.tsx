import styles from './MovieCard.module.scss'

type MovieCardProps = {
  id: Movie['id']
  image: Movie['image']
  title: Movie['title']
}

const MovieCard: React.FC<MovieCardProps> = ({ id, image, title }) => {
  return (
    <div className={styles.movieCard}>
      <div className={styles.movieCard__img}>
        <img src={image} alt='' className={styles.movieCard} />
      </div>
      <div className={styles.movieCard__title}>{title}</div>
    </div>
  )
}

export default MovieCard
