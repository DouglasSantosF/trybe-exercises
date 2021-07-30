import React from 'react';
import Login from './Login';
import Senha from './Senha';
import './Form.css'

class Form extends React.Component {

  constructor() {
    super();
    this.state = {
      login: '',
      senha: '',
      dia:'',
      profissao:'',
      termos: false,
    }

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange({target}){
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    
    this.setState({
      [name]: value,
    });
  }

/*   handleChangeLogin(event) {
    console.log('clicando no login');
    this.setState({
     login: event.target.value,
  });
  }

  handleChangeEmail(event){
    this.setState({
      senha: event.target.value,
    });
  } */


  render (){
    const { dia ,login, senha, profissao, termos } = this.state;
    return(
      <form id='form-react'>
        <label htmlFor="dia-check">que dia é hj?
          <select 
          name="dia" 
          value={ dia }
           id="dia-check"
           onChange={ this.handleChange }> 
            <option value='segunda'> segunda </option>
            <option value='terça'> terça </option>
            <option value='quarta'> quarta </option>
            <option value='quinta'> quinta </option>
            <option value='sexta'> sexta </option>
          </select>
         </label> 

         <Login value={login} handleChange={this.handleChange}/>

         <Senha value={senha} handleChange={this.handleChange} />

          <div>
            <label htmlFor="profissao-text"> Qual a sua Profissão? <br/>
            </label>
            <textarea name="profissao" value={ profissao } id="profissao-text" cols="30" rows="10" onChange={ this.handleChange }></textarea>
          </div>

          <div>  
            <label htmlFor="arquivos"> Escolha uma foto
            </label>
              <input type="file"  id='arquivos'/>
          </div>  

            <label htmlFor="input-termo"> Aceita os termos ?
              <input type="checkbox" name="termos" value={ termos } id="input-termo" onChange={ this.handleChange }/>
            </label>

      </form>
    );
  }
}

export default Form;