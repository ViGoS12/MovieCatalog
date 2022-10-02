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

  static async getMovie(key: string, id: string) {
    const { data } = await axios.get('https://imdb-api.com/en/API/Title/', {
      params: {
        apiKey: key,
        id: id,
      },
    })
    return data
  }

  static async getPerson(key: string, id: string) {
    const { data } = await axios.get('https://imdb-api.com/en/API/Name/', {
      params: {
        apiKey: key,
        id: id,
      },
    })
    return data
  }

  static async getTrailer(key: string, id: string) {
    const { data } = await axios.get('https://imdb-api.com/en/API/Trailer/', {
      params: {
        apiKey: key,
        id: id,
      },
    })
    return data
  }
}
