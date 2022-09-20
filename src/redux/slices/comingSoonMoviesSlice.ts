import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import MovieService from '../../API/MovieService'
import { APIKEY } from '../../constants/index'

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

export const fetchComingSoonMovies = createAsyncThunk<IRequest>(
  'movies/fetchComingSoonMoviesStatus',
  function () {
    const res = MovieService.getComingSoonMovies(APIKEY)
    return res
  }
)

export const comingSoonMoviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchComingSoonMovies.pending, (state, action) => {
      state.loadingStatus = 'loading'
      state.items = []
    })
    builder.addCase(fetchComingSoonMovies.fulfilled, (state, action) => {
      state.loadingStatus = 'success'
      state.items = action.payload.items
    })
    builder.addCase(fetchComingSoonMovies.rejected, (state, action) => {
      state.loadingStatus = 'error'
      state.items = []
    })
  },
})

export const {} = comingSoonMoviesSlice.actions

export default comingSoonMoviesSlice.reducer
