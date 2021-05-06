import React from 'react'
import MovieItem from './MovieItem';


function MoviesList({movies, addNom, nominated}) {


let movieElements = movies.map(item => {
    return (<MovieItem key={item.imdbID}  movie={item} addNom={addNom} nominated={nominated}/>)
})


    return (<div className="movies-div">
        {movieElements}
        </div>)
}

export default MoviesList;