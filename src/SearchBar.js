import  React, {useState, useEffect} from 'react' 


function SearchBar({movies, setMovies}) {
    let [search, setSearch] = useState("")
    

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=aa9ef830&s=${search}`)
        .then(r => r.json())
        .then(data => setMovies(data.Search)
        )}, [search])
    

    console.log(movies)
    return (
        <div className="searchbar-div">
            <label>Search Your Favorite Films </label>
            <input type="text" placeholder="Search Film Title" value={search} onChange={(event) => setSearch(event.target.value)}></input>
        </div>

    )
}

export default SearchBar;