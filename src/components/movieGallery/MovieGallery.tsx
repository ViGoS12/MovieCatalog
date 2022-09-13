import MovieCard from '../movieCard'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

import 'swiper/css'
import './swiper.scss'

import leftArrow from '../../assets/svg/leftArrow.svg'
import rightArrow from '../../assets/svg/rightArrow.svg'
import SwipeButton from './../UI/swipeButton/index'

type MovieListProps = {
  items: Movie[]
  clickCard: (id: Movie['id']) => void
}
const MovieList: React.FC<MovieListProps> = ({ items, clickCard }) => {
  return (
    <div className='movieGallery'>
      <Swiper
        slidesPerView={6}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}>
        <SwipeButton image={leftArrow} direction='prev' />

        {items.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard
              id={movie.id}
              image={movie.image}
              title={movie.title}
              clickCard={() => clickCard(movie.id)}
            />
          </SwiperSlide>
        ))}

        <SwipeButton image={rightArrow} direction='next' />
      </Swiper>
    </div>
  )
}

export default MovieList
