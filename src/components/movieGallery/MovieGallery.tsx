import MovieCard from '../movieCard'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

import 'swiper/css'
import './swiper.scss'

import leftArrow from '../../assets/svg/leftArrow.svg'
import rightArrow from '../../assets/svg/rightArrow.svg'

type MovieListProps = {
  items: Movie[]
  clickCard: (id: Movie['id']) => void
}
const MovieList: React.FC<MovieListProps> = ({ items, clickCard }) => {
  const SwiperButtonNext = () => {
    const swiper = useSwiper()
    return (
      <button
        className='btn'
        style={{ right: -40 }}
        onClick={() => {
          swiper.slideNext()
          swiper.slideNext()
          swiper.slideNext()
          swiper.slideNext()
        }}>
        <img className='img' src={rightArrow} alt='' />
      </button>
    )
  }
  const SwiperButtonPrev = () => {
    const swiper = useSwiper()
    return (
      <button
        className='btn'
        style={{ left: -40 }}
        onClick={() => {
          swiper.slidePrev()
          swiper.slidePrev()
          swiper.slidePrev()
          swiper.slidePrev()
        }}>
        <img className='img' src={leftArrow} alt='' />
      </button>
    )
  }

  return (
    <div className='movieGallery'>
      <Swiper
        slidesPerView={6}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}>
        <SwiperButtonPrev />

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

        <SwiperButtonNext />
      </Swiper>
    </div>
  )
}

export default MovieList
