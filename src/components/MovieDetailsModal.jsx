import PropTypes from 'prop-types'

function MovieDetailsModal({ movie, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{movie.title}</h2>
        <p>Year: {movie.year}</p>
        <p>Rating: {movie.rating}/10</p>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  )
}

MovieDetailsModal.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
}

export default MovieDetailsModal