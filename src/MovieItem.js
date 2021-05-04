import React from 'react'

function MovieItem({movie, noms, setNoms}) {

    console.log(movie)

    return (<div> 
        <img className="movie-img" src={movie.Poster} alt="movie poster"/>
        <h5>{movie.Title} ({movie.Year})</h5>
        <button >Nominate</button>
    </div>)
}

export default MovieItem;