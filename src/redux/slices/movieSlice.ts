import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

interface IMovieState {
  items: Movie[]
  loadingStatus: 'loading' | 'success' | 'error'
}

interface IRequest {
  items: Movie[]
  total: number
  totalPages: number
}

const initialState: IMovieState = {
  items: [],
  loadingStatus: 'loading',
}

export const fetchMovies = createAsyncThunk<IRequest, Filter>(
  'movies/fetchMoviesStatus',
  async (params) => {
    const { page } = params

    const { data } = await axios.get(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/`,
      {
        headers: {
          'X-API-KEY': '464e4dae-8d17-4dec-b509-8d68d73019db',
          'Content-Type': 'application/json',
        },
        params: {
          page,
        },
      }
    )
    return data
  }
)

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},

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
    })
  },
})

export const {} = movieSlice.actions

export default movieSlice.reducer
