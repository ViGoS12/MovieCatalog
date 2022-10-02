import MovieCard from '../movieCard'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import '../../scss/swiper.scss'

import leftArrow from '../../assets/svg/leftArrow.svg'
import rightArrow from '../../assets/svg/rightArrow.svg'
import SwipeButton from './../UI/swipeButton/index'

import styles from './MovieGallery.module.scss'
import SkeletonMovieCard from '../movieCard/SkeletonMovieCard'
import ErrorPage from './../../pages/ErrorPage'

type MovieGalleryProps = {
  items: Movie[]
  clickCard: (id: Movie['id']) => void
  title?: string
  status: string
  cardWrapperWidth?: string
}
const MovieGallery: React.FC<MovieGalleryProps> = ({
  items,
  clickCard,
  title = 'Recommend you to look',
  status,
  cardWrapperWidth,
}) => {
  return (
    <>
      {items.length ? (
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

              {status === 'loading'
                ? [...new Array(10)].map((_, i) => (
                    <SwiperSlide key={i}>
                      <SkeletonMovieCard />
                    </SwiperSlide>
                  ))
                : items.map((movie) => (
                    <SwiperSlide key={movie.id}>
                      <MovieCard
                        id={movie.id}
                        image={movie.image}
                        title={movie.title}
                        clickCard={() => clickCard(movie.id)}
                        wrapperWidth={cardWrapperWidth}
                      />
                    </SwiperSlide>
                  ))}

              <SwipeButton image={rightArrow} direction='next' />
            </Swiper>
          </div>
        </div>
      ) : (
        <ErrorPage />
      )}
    </>
  )
}

export default MovieGallery
