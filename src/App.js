import React, {useState} from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import MoviesList from './MoviesList'
import Nominations from './Nominations'
// console.log(process.env.REACT_APP_API_KEY)


function App() {
  let [movies, setMovies] = useState([])
  

  function addNom(noms) {
    const updatedMovies = movies.map(mov => {
      if (noms === mov.imdbID) {
        return mov.isNominated ? {...mov, isNominated: false} : {...mov, isNominated: true}
        }
      return mov
    })
    setMovies(updatedMovies)

  }




  
  const nominated = movies.filter(mov => {
      return mov.isNominated === true
    })
   
  

  return (
    <div className="App">
      <Header/>
      <SearchBar setMovies={setMovies} movies={movies}/>
      <h3 className="curly-text-right">Your Nominations:</h3>
      <h3 className="curly-text">Select Your Nominations:</h3>
      {movies ? <MoviesList movies={movies} addNom={addNom} nominated={nominated} /> : null}
      
       {nominated.length > 0 ? <Nominations noms={nominated} addNom={addNom}/> : null}
    </div>
  );
}

export default App;
