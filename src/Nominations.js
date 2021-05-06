import React from 'react' 
// import MovieItem from './MovieItem';
import NomItem from './NomItem';

function Nominations({noms, deleteNom}) {

    const nominationElements= noms.map(nom => {
       return  <NomItem key={nom.imdbID} nom={nom} deleteNom={deleteNom}/>
    // return <MovieItem key={nom.imdbID} movie={nom} deleteNom={deleteNom}/>
    })
   
   


    return (
        <div className='nom-div'>
            <h4 className="curly-text">Your Nominations</h4>
            {nominationElements}
        </div>
    )
}

export default Nominations;