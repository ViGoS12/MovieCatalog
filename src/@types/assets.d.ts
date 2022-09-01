declare module '*.scss' {
  const content: { [key: string]: any }
  export = content
}

declare module '*.svg' {
  const content: any
  export default content
}

type Dispather<S> = Dispatch<SetStateAction<S>>

type Movie = {
  countries: {
    country: string
  }[]
  genres: {
    genre: string
  }[]
  imdbId: string
  kinopoiskId: number
  nameEn: string
  posterUrl: string
  posterUrlPreview: string
  ratingImdb: number
  ratingKinopoisk: number
  type: string
  year: number
}

type Filter = {
  page: number
}
