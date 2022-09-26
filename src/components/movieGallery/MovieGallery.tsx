import MovieCard from '../movieCard'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import '../../scss/swiper.scss'

import leftArrow from '../../assets/svg/leftArrow.svg'
import rightArrow from '../../assets/svg/rightArrow.svg'
import SwipeButton from './../UI/swipeButton/index'

import styles from './MovieGallery.module.scss'
import SkeletonMovieCard from '../movieCard/SkeletonMovieCard'

type MovieGalleryProps = {
  items: Movie[]
  clickCard: (id: Movie['id']) => void
  title?: string
  status: string
}
const MovieGallery: React.FC<MovieGalleryProps> = ({
  items,
  clickCard,
  title = 'Recommend you to look',
  status,
}) => {
  return (
    <div className={styles.movieGallery}>
      <div className={styles.movieGallery__title}>
        {title}{' '}
        {/* <img className={styles.movieGallery__arrow} src={rightArrow} alt='' /> */}
      </div>
      <div>
        <Swiper
          slidesPerView={6}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('slide change')}>
          <SwipeButton image={leftArrow} direction='prev' />

          {status === 'loading' ? (
            <div className={styles.skeleton}>
              {[...new Array(10)].map((_, i) => (
                <SkeletonMovieCard key={i} />
              ))}
            </div>
          ) : (
            items.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCard
                  id={movie.id}
                  image={movie.image}
                  title={movie.title}
                  clickCard={() => clickCard(movie.id)}
                />
              </SwiperSlide>
            ))
          )}

          <SwipeButton image={rightArrow} direction='next' />
        </Swiper>
      </div>
    </div>
  )
}

export default MovieGallery
