import styles from './CastMovieCard.module.scss'

type CastMovieCardProps = {
  id: string
  image: string
  name: string
  clickCard: (id: Movie['id']) => void
}

const CastMovieCard: React.FC<CastMovieCardProps> = ({
  id,
  image,
  name,
  clickCard,
}) => {
  return (
    <div className={styles.castMovieCard}>
      <div
        className={styles.castMovieCard__wrapper}
        onClick={() => clickCard(id)}>
        {<img src={image} alt='' className={styles.castMovieCard__img} />}
      </div>
      <div className={styles.castMovieCard__title}>{name}</div>
    </div>
  )
}

export default CastMovieCard
