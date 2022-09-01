import './scss/App.scss'
import { fetchMovies } from './redux/slices/movieSlice'
import { useEffect, useState } from 'react'
import { RootState, useAppDispatch } from './redux/store'
import { useSelector } from 'react-redux'

function App() {
  const dispatch = useAppDispatch()
  const { items } = useSelector((state: RootState) => state.movie)
  const [page, setPage] = useState(1)

  const getMovies = async () => {
    dispatch(
      fetchMovies({
        page,
      })
    )
  }

  useEffect(() => {
    getMovies()
  }, [page])

  return (
    <div className='App'>
      {items.map((movie) => (
        <img src={movie.posterUrl} alt='' />
      ))}
    </div>
  )
}

export default App
