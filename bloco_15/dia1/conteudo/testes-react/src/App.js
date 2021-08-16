import React, { Component } from 'react';
import ValidEmail from './ValidEmail';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
    };
  }

  changeEmail(value) {
    this.setState({email: value});
  }  

  changeSaveEmail(EMAIL) {
    this.setState({ email:'', saveEmail: EMAIL });
  }
  
  render(){

    const { email, saveEmail } = this.state;
    // const EmAil = ;
   
    return (
      <div className="App">
      <label htmlFor='id-email'>
        Email
      </label>
      <input
       id='id-email'
       type="email"
       value={email}
      onChange={(event)=> this.changeEmail(event.target.value)}
      />
      <input
        id="btn-send"
        type="button"
        data-testid="id-send"
        value="Enviar"
        onClick={()=> this.changeSaveEmail(email) }
      />
      <ValidEmail email={saveEmail}/>
      <input id="btn-back" type="button" value="Voltar" />
      </div>
    );
  }
}


export default App;
