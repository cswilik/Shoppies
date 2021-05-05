import React from 'react'

function MovieItem({movie, addNom}) {


    return (<div> 
        <img className="movie-img" src={movie.Poster} alt="movie poster"/>
        <h5>{movie.Title} ({movie.Year})</h5>
       <button onClick ={() => addNom(movie)} >Nominate</button> 
       <button  disabled>Nominate</button>

    </div>)
}

export default MovieItem;