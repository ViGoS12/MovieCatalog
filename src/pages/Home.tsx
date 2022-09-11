import { useEffect, useState } from 'react'

import { RootState, useAppDispatch } from '../redux/store'
import { useSelector } from 'react-redux'
import { fetchMovies } from '../redux/slices/moviesSlice'

import styles from './scss/Home.module.scss'

import MovieGallery from '../components/movieGallery'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
  const router = useNavigate()
  const dispatch = useAppDispatch()
  const { items, loadingStatus } = useSelector(
    (state: RootState) => state.movie
  )

  const clickCard = (id: Movie['id']) => {
    router(`/movie/${id}`)
  }

  const [urlRequest, setUrlRequest] = useState(
    'https://imdb-api.com/en/API/ComingSoon'
  )
  console.log(items)

  const getMovies = async () => {
    dispatch(fetchMovies({ urlRequest }))
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className={styles.home}>
      <div className='app__container'>
        <MovieGallery items={items} clickCard={clickCard} />
      </div>
    </div>
  )
}

export default Home
