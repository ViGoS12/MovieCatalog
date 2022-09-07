import { RootState, useAppDispatch } from '../redux/store'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchMovies } from './../redux/slices/movieSlice'
import MovieList from './../components/movieList/'

const Home: React.FC = () => {
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

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className='app'>
      <div className='app__container'>
        <MovieList items={items} />
      </div>
    </div>
  )
}

export default Home
