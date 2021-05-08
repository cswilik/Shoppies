import React from 'react' 
import NomItem from './NomItem'

function Nominations({noms, deleteNom}) {
    
    const nominationElements= noms.map(nom => {  
       return  <NomItem key={nom.imdbID} nom={nom} deleteNom={deleteNom} />

    })
   
   
    return (
        <div className='nom-div'>
            {nominationElements}
        </div>
    )
}

export default Nominations;