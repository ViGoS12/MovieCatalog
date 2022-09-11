import { RootState, useAppDispatch } from '../redux/store'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchMovies } from './../redux/slices/movieSlice'
import MovieGallery from '../components/movieGallery'

const TopMovies: React.FC = () => {
  const dispatch = useAppDispatch()
  const { items, loadingStatus } = useSelector(
    (state: RootState) => state.movie
  )

  const [urlRequest, setUrlRequest] = useState(
    'https://imdb-api.com/en/API/Top250Movies'
  )
  console.log(items)

  const getMovies = async () => {
    dispatch(fetchMovies({ urlRequest }))
  }

  const clickCard = (id: Movie['id']) => {
    console.log('click on ', id)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className='app'>
      <div className='app__container'>
        <MovieGallery items={items} clickCard={clickCard} />
      </div>
    </div>
  )
}

export default TopMovies
