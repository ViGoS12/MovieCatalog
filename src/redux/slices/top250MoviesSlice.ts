import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import MovieService from './../../API/MovieService'
import { APIKEY } from './../../constants/index'

interface IMoviesState {
  items: Movie[]
  movie: Movie
  loadingStatus: 'loading' | 'success' | 'error'
}

interface IRequest {
  items: Movie[]
}

const initialState: IMoviesState = {
  items: [],
  movie: {
    id: '',
    rank: '',
    title: '',
    fullTitle: '',
    year: '',
    image: '',
    crew: '',
    imDbRating: '',
    imDbRatingCount: '',
  },

  loadingStatus: 'loading',
}

export const fetchTop250Movies = createAsyncThunk<IRequest>(
  'movies/fetchTop250MoviesStatus',
  function () {
    const res = MovieService.getTop250Movies(APIKEY)
    return res
  }
)

export const top250MoviesSlice = createSlice({
  name: 'top250Movies',
  initialState,
  reducers: {
    setMovie(state: IMoviesState, action: PayloadAction<string>) {
      state.movie = state.items.filter(
        (movie: Movie) => movie.id === action.payload
      )[0]
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTop250Movies.pending, (state) => {
      state.loadingStatus = 'loading'
      state.items = []
    })
    builder.addCase(fetchTop250Movies.fulfilled, (state, action) => {
      state.loadingStatus = 'success'
      state.items = action.payload.items
    })
    builder.addCase(fetchTop250Movies.rejected, (state) => {
      state.loadingStatus = 'error'
      state.items = []
    })
  },
})

export const { setMovie } = top250MoviesSlice.actions

export default top250MoviesSlice.reducer
