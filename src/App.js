import React, {useState} from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import MoviesList from './MoviesList'
import Nominations from './Nominations'


function App() {
  let [movies, setMovies] = useState([])
  let [noms, setNoms] = useState([])


  function addNom(movie) {
    setNoms(noms.concat(movie))
    
  }

  function deleteNom(movie) {
   const filteredNoms = noms.filter(i => {
     console.log(i)
      return i.imdbID !== movie.imdbID
    })
    setNoms(filteredNoms)
    console.log(noms)
  }

  

  return (
    <div className="App">
      <Header/>
      <SearchBar movies={movies} setMovies={setMovies}/>
      {movies ? <MoviesList movies={movies} addNom={addNom}/> : null }
      {noms.length > 0 ? <Nominations noms={noms} deleteNom={deleteNom}/> : null }
    </div>
  );
}

export default App;
