import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import MovieService from '../../API/MovieService'
import { APIKEY } from '../../constants/index'

interface IpersonIdState {
  person: Person
  loadingStatus: 'loading' | 'success' | 'error'
}

const initialState: IpersonIdState = {
  person: {
    id: '',
    name: '',
    role: '',
    image: '',
    summary: '',
    birthDate: '',
    deathDate: '',
    awards: '',
    height: '',
    knownFor: [
      {
        id: '',
        title: '',
        fullTitle: '',
        year: '',
        role: '',
        image: '',
      },
    ],
    castMovies: [
      {
        id: '',
        role: '',
        title: '',
        year: '',
        description: '',
      },
    ],
    errorMessage: '',
  },
  loadingStatus: 'loading',
}

export const fetchPerson = createAsyncThunk<Person, string>(
  'movies/fetchMovieStatus',
  function (id) {
    const res = MovieService.getPerson(APIKEY, id)
    return res
  }
)

export const personIdSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchPerson.pending, (state, action) => {
      state.loadingStatus = 'loading'
      state.person = initialState.person
    })
    builder.addCase(
      fetchPerson.fulfilled,
      (state, action: PayloadAction<Person>) => {
        state.loadingStatus = 'success'
        state.person = action.payload
      }
    )
    builder.addCase(fetchPerson.rejected, (state, action) => {
      state.loadingStatus = 'error'
      state.person = initialState.person
    })
  },
})

export const {} = personIdSlice.actions

export default personIdSlice.reducer
