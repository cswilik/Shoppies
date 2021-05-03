import  React, {useState} from 'react' 

function SearchBar() {
    let [search, setSearch] = useState("")
    let [movies, setMovies] = useState([])

    fetch(`http://www.omdbapi.com/?apikey=aa9ef830&s=${search}`)
    .then(r => r.json())
    .then(data => setMovies(data.Search))

    console.log(movies)
    return (
        <div className="searchbar-div">
            <label>Search Your Favorite Films </label>
            <input type="text" placeholder="Search Film Title" value={search} onChange={(event) => setSearch(event.target.value)}></input>
            
        </div>

    )
}

export default SearchBar;