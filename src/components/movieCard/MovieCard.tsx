import styles from './MovieCard.module.scss'

type MovieCardProps = {
  id: Movie['id']
  image: Movie['image']
  title: Movie['title']
  clickCard: (id: Movie['id']) => void
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  image,
  title,
  clickCard,
}) => {
  return (
    <div className={styles.movieCard}>
      <div className={styles.movieCard__wrapper} onClick={() => clickCard(id)}>
        {image ? (
          <img src={image} alt='' className={styles.movieCard__img} />
        ) : (
          <img
            src='https://imdb-api.com/images/128x176/nopicture.jpg'
            className={styles.movieCard__img}
            alt=''
          />
        )}
      </div>
      <div className={styles.movieCard__title}>{title}</div>
    </div>
  )
}

export default MovieCard
