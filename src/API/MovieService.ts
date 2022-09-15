import axios from 'axios'

export default class MovieService {
  static async getTop250Movies(key: string) {
    const { data } = await axios.get(
      'https://imdb-api.com/en/API/Top250Movies',
      {
        params: {
          apiKey: key,
        },
      }
    )
    return data
  }

  static async getComingSoonMovies(key: string) {
    const { data } = await axios.get('https://imdb-api.com/en/API/ComingSoon', {
      params: {
        apiKey: key,
      },
    })
    return data
  }
}
