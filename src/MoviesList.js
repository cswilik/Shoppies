import React from 'react'
import MovieItem from './MovieItem';


function MoviesList({movies, addNom}) {


let movieElements = movies.map(item => {
    return (<MovieItem key={item.imdbID} addNom={addNom} movie={item}/>)
})


    return (<div className="movies-div">
        <h3>Search Results</h3>
        {movieElements}
        </div>)
}

export default MoviesList;