import { RootState, useAppDispatch } from '../redux/store'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchTop250Movies } from '../redux/slices/moviesSlice'
import MovieGallery from '../components/movieGallery'

const TopMovies: React.FC = () => {
  const dispatch = useAppDispatch()
  const { items, loadingStatus } = useSelector(
    (state: RootState) => state.movie
  )
  console.log(items)

  const getMovies = async () => {
    dispatch(fetchTop250Movies())
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
