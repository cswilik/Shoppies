import React from 'react'

function MovieItem({movie, addNom, nominated, deleteNom}) {
    
    

    return (<div className="movie-item-div"> 
        <img className="movie-img" src={movie.Poster} alt="movie poster"/>
        <h5 className="movie-title">{movie.Title} ({movie.Year})</h5>
        {movie.isNominated || nominated.length >= 5 ? <button disabled>Nominated</button> :<button onClick ={() => addNom(movie.imdbID)} >Nominate</button> }
        
    </div>)
}

export default MovieItem;