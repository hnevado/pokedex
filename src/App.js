import logo from './img/logopokemon.png';
import {ListadoPokemon} from './components/ListadoPokemon';
import {Pokemon} from './components/Pokemon';
import {Cabecera} from './components/Cabecera';
import './App.css';
import './components/ListadoPokemon.css';

import './components/Pokemon.css';

import React from 'react';
import axios from "axios";

function App() {
  
      const [pokemons,setPokemons] = React.useState([]);

      const getPokemons = async () => {

        try {
          let arrayPokemon=[];
          const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
          const res = await axios.get(url);
          //Ahora en res tengo el nombre de y la url para sacar más info de ese pokémon

          //Recorro el array de todos los pokemon que me he traido
          for (let i=0;i<res.data.results.length;i++)
          {
            //En res.data.results[i].name tengo el nombre del pokemon
            //En res.data.results[i].url tengo la URL que debo consultar si quiero sacar más información de ese pokemon
            let nombrePokemon = res.data.results[i].name;

            let url_pokemon = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;
            let res_pokemon = await axios.get(url_pokemon);

            arrayPokemon.push(res_pokemon.data);
          }
          
        setPokemons(arrayPokemon);

        } catch (e) {

          console.log(e);

        }
      }

      React.useEffect(() => {
        getPokemons();
      }, []);


  return (
       <React.Fragment>
        <Cabecera logo={logo}/>
        <ListadoPokemon>
          {pokemons.map(pokemon => (
          <Pokemon 
            key={pokemon.id}
            imagen={pokemon.sprites.other.dream_world.front_default}
            nombre={pokemon.name}
          />

          ))}

        </ListadoPokemon>
        </React.Fragment> 
  );
}

export default App;
