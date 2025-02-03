import { useState } from 'react'
import PropTypes from 'prop-types'
import MovieDetailsModal from './MovieDetailsModal'

function Movie({ movie }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="movie" onClick={() => setShowModal(true)}>
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
      {showModal && (
        <MovieDetailsModal movie={movie} onClose={() => setShowModal(false)} />
      )}
    </div>
  )
}

Movie.propTypes = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Poster: PropTypes.string,
  }).isRequired,
}

export default Movie