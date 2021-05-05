import React from 'react'

function NomItem({nom, deleteNom}) {
    return (<>
        <h6>{nom.Title} ({nom.Year})</h6>
        <button onClick = {() => deleteNom(nom)}>Remove Nomination</button>
    </>)
}

export default NomItem;