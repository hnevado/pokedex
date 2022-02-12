import React from 'react';

function ListadoPokemon(props)
{

    return (
        <ul className="listadoPokemon">
            {props.children}
        </ul>

    )


}

export {ListadoPokemon};