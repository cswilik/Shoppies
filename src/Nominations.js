import React from 'react' 
import NomItem from './NomItem';

function Nominations({noms, deleteNom}) {

    const nominationElements = noms.map(item => {
       return( <NomItem key={item.imdbID} nom={item} deleteNom={deleteNom}/>)
    })
    return (
        <div className='nom-div'>
            <h4>Nominations</h4>
            {nominationElements}
        </div>
    )
}

export default Nominations;