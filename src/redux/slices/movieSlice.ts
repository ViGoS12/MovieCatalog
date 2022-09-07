import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

interface IMovieState {
  items: Movie[]
  loadingStatus: 'loading' | 'success' | 'error'
}

interface IRequest {
  items: Movie[]
}

const initialState: IMovieState = {
  items: [],
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
      console.log(state.loadingStatus)
    })
  },
})

export const {} = movieSlice.actions

export default movieSlice.reducer
