import MovieCard from './../movieCard/'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
// import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import './swiper.scss'
import 'swiper/css/navigation'

type MovieListProps = {
  items: Movie[]
}
const MovieList: React.FC<MovieListProps> = ({ items }) => {
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
        {'>'}
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
        {'<'}
      </button>
    )
  }

  return (
    <div className='movieList'>
      <Swiper
        slidesPerView={6}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}>
        <SwiperButtonPrev />

        {items.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard id={movie.id} image={movie.image} title={movie.title} />
          </SwiperSlide>
        ))}
        <div className='test'>
          <SwiperButtonNext />
        </div>
      </Swiper>
    </div>
  )
}

export default MovieList
