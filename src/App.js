import React, {useState} from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import MoviesList from './MoviesList'
import Nominations from './Nominations'


function App() {
  let [movies, setMovies] = useState([])
  let [noms, setNoms] = useState([])
  

 


  function addNom(movie) {
    movie.isNominated= true
    setNoms(noms.concat(movie))
    
    
  }

  function deleteNom(movie) {
   const filteredNoms = noms.filter(i => {
      return i.imdbID !== movie.imdbID
    })
    setNoms(filteredNoms)
  }

  

  return (
    <div className="App">
      <Header/>
      <SearchBar setMovies={setMovies}/>
      <h3 className="curly-text">Select Your Nominations:</h3>
      {movies ? <MoviesList movies={movies} addNom={addNom} /> : 
      <h4 className="text">Please search for your favorite films to nominate them for an award!</h4> }
      {noms.length > 0 ? <Nominations noms={noms} deleteNom={deleteNom}/> : null }
    </div>
  );
}

export default App;
