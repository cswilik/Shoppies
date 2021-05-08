import React, {useEffect, useState} from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import MoviesList from './MoviesList'
import Nominations from './Nominations'



function App() {
  let [movies, setMovies] = useState([])
  let [noms, setNoms] = useState([])
  
  
 useEffect(() => {
   let data = localStorage.getItem("nominations")
   if (data) {
   setNoms(JSON.parse(data))
   }
  }, [])

 

  function addNom(addedNom) {
   setNoms([...noms,addedNom ])
  localStorage.setItem("nominations", JSON.stringify([...noms, addedNom]))
  }


  function deleteNom(deletedNom) {
    const filteredNoms = noms.filter(n => {
     return (n.imdbID !== deletedNom)
    })
    setNoms(filteredNoms)
    localStorage.setItem("nominations", JSON.stringify(filteredNoms))
  }


 

  return (
    <div className="App">
      <Header/>
      <SearchBar setMovies={setMovies}/>
      <h3 className="curly-text-right">Your Nominations:</h3>
      <h3 className="curly-text">Select Your Nominations:</h3>
      {movies ? <MoviesList movies={movies} addNom={addNom} noms={noms} /> : null}
      {noms.length > 0 ? <Nominations noms={noms} addNom={addNom} deleteNom={deleteNom}/> : null}
    </div>
  );
}

export default App;
