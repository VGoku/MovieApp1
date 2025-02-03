import { useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <header className="App-header">
        <h1>Movie App</h1>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </header>
      <main>
        <MovieList searchTerm={searchTerm} />
      </main>
      <Footer />
    </div>
  )
}

export default App
