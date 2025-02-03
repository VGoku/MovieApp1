import Movie from './Movie'

const movies = [
  { id: 1, title: 'Inception', year: 2010, rating: 8.8 },
  { id: 2, title: 'Interstellar', year: 2014, rating: 8.6 },
  { id: 3, title: 'Dunkirk', year: 2017, rating: 7.9 },
]

function MovieList({ searchTerm }) {
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="movie-list">
      {filteredMovies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default MovieList