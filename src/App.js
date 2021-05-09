import React, {useEffect, useState} from 'react'
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'
import MoviesList from './Components/MoviesList'
import Nominations from './Components/Nominations'



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


 function handleSubmit(e) {
   e.preventDefault()
    alert('Thank you for submitting! Please stay tuned for The Shoppies Awards Ceremony in the near future!' )
    setNoms([])
    localStorage.setItem("nominations", JSON.stringify([]))
 }

  return (
    <div className="App">
      <Header/>
      <SearchBar setMovies={setMovies}/>
      <h3 className="curly-text-right">Your Nominations:</h3>
      <h3 className="curly-text">Select Your Nominations:</h3>
      {noms.length >= 5 ? <div className="submit-div">
                <p>You cannot have more than 5 nominations! Please submit when you're ready!</p>
                <button className="button" onClick={(e) => handleSubmit(e)}>Submit</button>
        </div> : null}
      {movies.length > 0 ? <MoviesList movies={movies} addNom={addNom} noms={noms} /> : 
        <div className="start-div">
          <span role="img" aria-label="sheep" className="emoji">🏆</span>
          Begin by searching your favorite films!
          <span role="img" aria-label="sheep" >🏆</span>
        </div> }
      {noms.length > 0 ? <Nominations noms={noms} addNom={addNom} deleteNom={deleteNom}/> : null}
    </div>
  );
}

export default App;
