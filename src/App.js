import React, {useState} from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import MoviesList from './MoviesList'
import Nominations from './Nominations'


function App() {
  let [movies, setMovies] = useState([])
  let [noms, setNoms] = useState([])

  console.log(noms)

  return (
    <div className="App">
      <Header/>
      <SearchBar movies={movies} setMovies={setMovies}/>
      {movies ? <MoviesList movies={movies} noms={noms} setNoms={setNoms}/> : null }
      {noms.length > 0 ? <Nominations noms={noms}/> : null }
    </div>
  );
}

export default App;
