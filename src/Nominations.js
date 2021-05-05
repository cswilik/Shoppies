import React from 'react' 

function Nominations({noms}) {

    const nominationElements = noms.map(item => {
       return( <h6>{item.Title}, {item.Year}</h6>)
    })
    return (
        <div className='nom-div'>
            <h4>Nominations</h4>
            {nominationElements}
        </div>
    )
}

export default Nominations;