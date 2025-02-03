import PropTypes from 'prop-types'
import Movie from './Movie'

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </div>
  )
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbID: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      Year: PropTypes.string.isRequired,
      Poster: PropTypes.string,
    })
  ).isRequired,
}

export default MovieList