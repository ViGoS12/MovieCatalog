import MovieCard from './../movieCard/'

type MovieListProps = {
  items: Movie[]
}
const MovieList: React.FC<MovieListProps> = ({ items }) => {
  return (
    <></>
    // <div className='movieGallery'>
    //   {items.map((movie) => (
    //     <MovieCard id={movie.id} image={movie.image} title={movie.title} clickCard={clickCard}  />
    //   ))}
    // </div>
  )
}

export default MovieList
