import { useState } from 'react'
import PropTypes from 'prop-types'
import MovieDetailsModal from './MovieDetailsModal'

function Movie({ movie }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="movie" onClick={() => setShowModal(true)}>
      <h2>{movie.title}</h2>
      <p>{movie.year}</p>
      <p>Rating: {movie.rating}/10</p>
      {showModal && (
        <MovieDetailsModal movie={movie} onClose={() => setShowModal(false)} />
      )}
    </div>
  )
}

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
}

export default Movie