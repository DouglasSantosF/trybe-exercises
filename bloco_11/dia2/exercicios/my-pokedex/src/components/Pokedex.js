import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component{
  
  render(){

    const { pokemons } = this.props;
  
    return(
    
      <div className='pokedex'>
        {pokemons.map((poke) => <Pokemon key={poke.id} pokemon={poke}/>)}
      </div>
    
    );
  }


}

export default Pokedex;