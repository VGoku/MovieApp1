import { useEffect, useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Pagination from './components/Pagination'

// Access the API key from the environment variable
const API_KEY = import.meta.env.VITE_OMDB_API_KEY

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    if (searchTerm) {
      setLoading(true)
      fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}&type=movie&page=${page}`)
        .then(response => response.json())
        .then(data => {
          if (data.Response === "True") {
            setMovies(data.Search || [])
            setTotalPages(Math.ceil(data.totalResults / 10)) // Assuming 10 results per page
          } else {
            console.error('Error fetching data:', data.Error)
          }
          setLoading(false)
        })
        .catch(error => {
          console.error('Error fetching data:', error)
          setLoading(false)
        })
    }
  }, [searchTerm, page])

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <header className="App-header">
        <h1>Movie App</h1>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            setPage(1) // Reset to the first page on new search
          }}
          className="search-bar"
        />
      </header>
      <main>
        {loading ? (
          <div className="loading-spinner">Loading...</div>
        ) : (
          <>
            <MovieList movies={movies} />
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
