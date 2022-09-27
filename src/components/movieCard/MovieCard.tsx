import styles from './MovieCard.module.scss'

type MovieCardProps = {
  id: Movie['id']
  image: Movie['image']
  title: Movie['title']
  clickCard: (id: Movie['id']) => void
  wrapperWidth?: string
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  image,
  title,
  clickCard,
  wrapperWidth = '150px',
}) => {
  return (
    <div className={styles.movieCard}>
      <div
        className={styles.movieCard__wrapper}
        onClick={() => clickCard(id)}
        style={{ minWidth: wrapperWidth }}>
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
      <div className={styles.movieCard__title}>
        {title.length > 20 ? title.slice(0, 17) + '...' : title}
      </div>
    </div>
  )
}

export default MovieCard
