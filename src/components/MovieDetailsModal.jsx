import PropTypes from 'prop-types'

function MovieDetailsModal({ movie, onClose }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{movie.Title}</h2>
        <p>Year: {movie.Year}</p>
        <p>Rating: {movie.imdbRating}/10</p>
        <p>Description: {movie.Plot}</p>
      </div>
    </div>
  )
}

MovieDetailsModal.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    imdbRating: PropTypes.string,
    Plot: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
}

export default MovieDetailsModal