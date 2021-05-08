import  React, {useState, useEffect} from 'react' 



function SearchBar({setMovies}) {
    let [search, setSearch] = useState("")
    
// allows us to search the API and update whenever we search
    useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${search}`)
    .then(r => r.json())
    .then(data => handleData(data.Search)
    )}, [search])

    function handleData(data) {
        if (data === undefined) {
            return null
        } else {
       setMovies(data)     
    }
}



    

    return (
        <div className="searchbar-div">
            <label className="text">Search Your Favorite Films </label>
            <input className="input-bar" type="text" placeholder="Search Film Title" value={search} onChange={(event) => setSearch(event.target.value)}></input>
        </div>

    )
}

export default SearchBar;