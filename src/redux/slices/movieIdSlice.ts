import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import MovieService from '../../API/MovieService'
import { APIKEY } from '../../constants/index'

interface IMoviesState {
  movie: TitleMovie
  trailer: Trailer
  loadingMovieStatus: 'loading' | 'success' | 'error'
  loadingTrailerStatus: 'loading' | 'success' | 'error'
}

const initialState: IMoviesState = {
  movie: {
    id: '',
    title: '',
    originalTitle: '',
    fullTitle: '',
    type: '',
    year: '',
    image: '',
    releaseDate: '',
    runtimeMins: '',
    runtimeStr: '',
    plot: '',
    plotLocal: '',
    plotLocalIsRtl: true,
    awards: '',
    directors: '',
    directorList: [
      {
        id: '',
        name: '',
      },
    ],
    writers: '',
    writerList: [
      {
        id: '',
        name: '',
      },
    ],
    stars: '',
    starList: [
      {
        id: '',
        name: '',
      },
    ],
    actorList: [
      {
        id: '',
        image: '',
        name: '',
        asCharacter: '',
      },
    ],
    fullCast: {
      imDbId: '',
      title: '',
      fullTitle: '',
      type: '',
      year: '',
      directors: {
        job: '',
        items: [
          {
            id: '',
            name: '',
            description: '',
          },
        ],
      },
      writers: {
        job: '',
        items: [
          {
            id: '',
            name: '',
            description: '',
          },
        ],
      },
      actors: [
        {
          id: '',
          image: '',
          name: '',
          asCharacter: '',
        },
      ],
      others: [
        {
          job: '',
          items: [
            {
              id: '',
              name: '',
              description: '',
            },
          ],
        },
      ],
      errorMessage: '',
    },
    genres: '',
    genreList: [
      {
        key: '',
        value: '',
      },
    ],
    companies: '',
    companyList: [
      {
        id: '',
        name: '',
      },
    ],
    countries: '',
    countryList: [
      {
        key: '',
        value: '',
      },
    ],
    languages: '',
    languageList: [
      {
        key: '',
        value: '',
      },
    ],
    contentRating: '',
    imDbRating: '',
    imDbRatingVotes: '',
    metacriticRating: '',
    ratings: {
      imDbId: '',
      title: '',
      fullTitle: '',
      type: '',
      year: '',
      imDb: '',
      metacritic: '',
      theMovieDb: '',
      rottenTomatoes: '',
      filmAffinity: '',
      errorMessage: '',
    },
    wikipedia: {
      imDbId: '',
      title: '',
      fullTitle: '',
      type: '',
      year: '',
      language: '',
      titleInLanguage: '',
      url: '',
      plotShort: {
        plainText: '',
        html: '',
      },
      plotFull: {
        plainText: '',
        html: '',
      },
      errorMessage: '',
    },
    posters: {
      imDbId: '',
      title: '',
      fullTitle: '',
      type: '',
      year: '',
      posters: [
        {
          id: '',
          link: '',
          aspectRatio: 0,
          language: '',
          width: 0,
          height: 0,
        },
      ],
      backdrops: [
        {
          id: '',
          link: '',
          aspectRatio: 0,
          language: '',
          width: 0,
          height: 0,
        },
      ],
      errorMessage: '',
    },
    images: {
      imDbId: '',
      title: '',
      fullTitle: '',
      type: '',
      year: '',
      items: [
        {
          title: '',
          image: '',
        },
      ],
      errorMessage: '',
    },
    trailer: {
      imDbId: '',
      title: '',
      fullTitle: '',
      type: '',
      year: '',
      videoId: '',
      videoTitle: '',
      videoDescription: '',
      thumbnailUrl: '',
      uploadDate: '',
      link: '',
      linkEmbed: '',
      errorMessage: '',
    },
    boxOffice: {
      budget: '',
      openingWeekendUSA: '',
      grossUSA: '',
      cumulativeWorldwideGross: '',
    },
    tagline: '',
    keywords: '',
    keywordList: [''],
    similars: [
      {
        id: '',
        title: '',
        image: '',
        imDbRating: '',
      },
    ],
    tvSeriesInfo: {
      yearEnd: '',
      creators: '',
      creatorList: [
        {
          id: '',
          name: '',
        },
      ],
      seasons: [''],
    },
    tvEpisodeInfo: {
      seriesId: '',
      seriesTitle: '',
      seriesFullTitle: '',
      seriesYear: '',
      seriesYearEnd: '',
      seasonNumber: '',
      episodeNumber: '',
      previousEpisodeId: '',
      nextEpisodeId: '',
    },
    errorMessage: '',
  },
  trailer: {
    imDbId: '',
    title: '',
    fullTitle: '',
    type: '',
    year: '',
    videoId: '',
    videoTitle: '',
    videoDescription: '',
    thumbnailUrl: '',
    uploadDate: '',
    link: '',
    linkEmbed: '',
    errorMessage: '',
  },
  loadingMovieStatus: 'loading',
  loadingTrailerStatus: 'loading',
}

export const fetchMovie = createAsyncThunk<TitleMovie, string>(
  'movies/fetchMovieStatus',
  function (id) {
    const res = MovieService.getMovie(APIKEY, id)
    return res
  }
)

export const fetchTrailer = createAsyncThunk<Trailer, string>(
  'movies/fetchTrailerStatus',
  function (id) {
    const res = MovieService.getTrailer(APIKEY, id)
    return res
  }
)

export const movieIdSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchMovie.pending, (state, action) => {
      state.loadingMovieStatus = 'loading'
      state.movie = initialState.movie
    })
    builder.addCase(
      fetchMovie.fulfilled,
      (state, action: PayloadAction<TitleMovie>) => {
        state.loadingMovieStatus = 'success'
        state.movie = action.payload
      }
    )
    builder.addCase(fetchMovie.rejected, (state, action) => {
      state.loadingMovieStatus = 'error'
      state.movie = initialState.movie
    })
    builder.addCase(fetchTrailer.pending, (state, action) => {
      state.loadingTrailerStatus = 'loading'
      state.trailer = initialState.trailer
    })
    builder.addCase(
      fetchTrailer.fulfilled,
      (state, action: PayloadAction<Trailer>) => {
        state.loadingTrailerStatus = 'success'
        state.trailer = action.payload
      }
    )
    builder.addCase(fetchTrailer.rejected, (state, action) => {
      state.loadingTrailerStatus = 'error'
      state.trailer = initialState.trailer
    })
  },
})

export const {} = movieIdSlice.actions

export default movieIdSlice.reducer
