import React from 'react'

function MovieItem({movie, addNom, nominated}) {
    
    

    return (<div> 
        <img className="movie-img" src={movie.Poster} alt="movie poster"/>
        <h5>{movie.Title} ({movie.Year})</h5>
        {movie.isNominated || nominated.length >= 5 ? <button disabled>Nominated</button> :<button onClick ={() => addNom(movie.imdbID)} >Nominate</button> }
        
    </div>)
}

export default MovieItem;