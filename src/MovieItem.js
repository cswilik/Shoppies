import React, {useState} from 'react'

function MovieItem({movie, noms, setNoms}) {
    let [isNominated, setIsNominated] = useState(false)

    function handleNomination(e) {
        e.preventDefault()
        setNoms(noms.concat(movie))
        setIsNominated(!isNominated)
    }

    return (<div> 
        <img className="movie-img" src={movie.Poster} alt="movie poster"/>
        <h5>{movie.Title} ({movie.Year})</h5>
        {!isNominated ? <button onClick ={handleNomination} >Nominate</button> : <button onClick ={handleNomination} disabled>Nominate</button>}

    </div>)
}

export default MovieItem;