import React from 'react'
import MovieItem from './MovieItem';


function MoviesList({movies, noms, setNoms}) {


let movieElements = movies.map(item => {
    return (<MovieItem key={item.imdbID} noms={noms} setNoms={setNoms} movie={item}/>)
})


    return (<div className="movies-div">
        <h3>Search Results</h3>
        {movieElements}
        </div>)
}

export default MoviesList;