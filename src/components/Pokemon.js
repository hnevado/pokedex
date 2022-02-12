import React from 'react';

function Pokemon(props)
{

  return (
    <li id={props.nombre}>
      <div className="pokemon">
        <p><img src={props.imagen} /></p>
        <div className="nombrePokemon">{props.nombre}</div>
    
    </div>
    
  </li>

  );

}

export {Pokemon}