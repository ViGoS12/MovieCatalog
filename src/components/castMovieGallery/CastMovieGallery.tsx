import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import '../../scss/swiper.scss'

import leftArrow from '../../assets/svg/leftArrow.svg'
import rightArrow from '../../assets/svg/rightArrow.svg'
import SwipeButton from './../UI/swipeButton/index'

import styles from './CastMovieGallery.module.scss'
import CastMovieCard from '../castMovieCard'

type CastMoviesGalleryProps = {
  items: TitleMovie['actorList']
  clickCard: (id: Movie['id']) => void
  title?: string
  status?: string
}
const CastMoviesGallery: React.FC<CastMoviesGalleryProps> = ({
  items,
  clickCard,
  title = 'Recommend you to look',
  status,
}) => {
  return (
    <div className={styles.castMoviesGallery}>
      <div className={styles.castMoviesGallery__title}>{title}</div>
      <div>
        <Swiper
          slidesPerView={6}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('slide change')}>
          <SwipeButton image={leftArrow} direction='prev' />
          {items.map((cast) => (
            <SwiperSlide key={cast.id}>
              <CastMovieCard
                id={cast.id}
                image={cast.image}
                name={cast.name}
                clickCard={() => clickCard(cast.id)}
              />
            </SwiperSlide>
          ))}
          <SwipeButton image={rightArrow} direction='next' />
        </Swiper>
      </div>
    </div>
  )
}

export default CastMoviesGallery
