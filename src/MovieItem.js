import React from 'react'


function MovieItem({movie, addNom, noms}) {
    
    function handleClick(e) {
        e.preventDefault()
        addNom(movie)
    }

    const nominated = noms.find(n => n.imdbID === movie.imdbID)

    return (<div className="movie-item-div"> 
        <img className="movie-img" src={movie.Poster} alt="movie poster"/>
        <h5 className="movie-title">{movie.Title} ({movie.Year})</h5>
        {(nominated || noms.length >= 5) ? <button disabled>Nominate</button> : <button className="button" onClick ={(e) =>{handleClick(e)}} >Nominate</button> }
        
    </div>)
}

export default MovieItem;