import React from 'react' 
// import MovieItem from './MovieItem';
import NomItem from './NomItem';

function Nominations({noms, addNom}) {

    const nominationElements= noms.map(nom => {
       return  <NomItem key={nom.imdbID} nom={nom} addNom={addNom}/>
    })
   
   


    return (
        <div className='nom-div'>
            {nominationElements}
        </div>
    )
}

export default Nominations;