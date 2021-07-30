import React from 'react';

class Senha extends React.Component {
  render(){
    const { senha, handleChange } = this.props;
    return (
      <label htmlFor="senha-input"> Senha:
        <input type="password" name='senha' value={ senha } onChange={ handleChange } id='senha-input' />
      </label>
    );
  }
}

export default Senha;