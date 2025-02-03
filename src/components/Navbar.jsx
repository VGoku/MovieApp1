import PropTypes from 'prop-types'

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <h2>Movie App</h2>
      <button onClick={() => setDarkMode(!darkMode)} className="dark-mode-toggle">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  )
}

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
}

export default Navbar
