import './scss/App.scss'
import { fetchMovies } from './redux/slices/movieSlice'
import { useEffect } from 'react'
import { RootState, useAppDispatch } from './redux/store'
import { useSelector } from 'react-redux'

import MovieList from './components/movieList'

function App() {
  const dispatch = useAppDispatch()
  const { items, loadingStatus } = useSelector(
    (state: RootState) => state.movie
  )
  console.log(items)

  const getMovies = async () => {
    dispatch(fetchMovies({}))
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

export default App
