import React from 'react'

function NomItem({nom, deleteNom}) {
    return (<div className="movie-item-div">
        <img className="movie-img" src={nom.Poster} alt='movie poster'/>
        <h6 className="text">{nom.Title} ({nom.Year})</h6>
        <button className="button" onClick = {() => deleteNom(nom.imdbID)}>Remove Nomination</button>
    </div>)
}

export default NomItem;