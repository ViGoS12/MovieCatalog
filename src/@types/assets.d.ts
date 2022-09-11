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
  id: string
  rank: string
  title: string
  fullTitle: string
  year: string
  image: string
  crew: string
  imDbRating: string
  imDbRatingCount: string
}

type Filter = {
  // page: number
  urlRequest: string
}
