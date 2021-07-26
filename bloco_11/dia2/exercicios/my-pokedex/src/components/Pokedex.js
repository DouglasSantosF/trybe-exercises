import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component{
  
  render(){

    const { batata } = this.props;
  
    return(
    
      <div className='pokedex'>
        {batata.map((poke) => <Pokemon key={poke.id} pokemon={poke}/>)}
      </div>
    
    );
  }


}

export default Pokedex;