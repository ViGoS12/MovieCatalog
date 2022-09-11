import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

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

export const fetchMovies = createAsyncThunk<IRequest, Filter>(
  'movies/fetchMoviesStatus',
  async ({ urlRequest }) => {
    const { data } = await axios.get(urlRequest, {
      params: {
        apiKey: 'k_s72tr442',
      },
    })

    return data
  }
)

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovie(state: IMoviesState, action: PayloadAction<string>) {
      state.movie = state.items.filter(
        (movie: Movie) => movie.id === action.payload
      )[0]
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.loadingStatus = 'loading'
      state.items = []
    })
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loadingStatus = 'success'
      state.items = action.payload.items
    })
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loadingStatus = 'error'
      state.items = []
      console.log(state.loadingStatus)
    })
  },
})

export const { setMovie } = moviesSlice.actions

export default moviesSlice.reducer
