import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    
    this.state = {
      numeroDeCliquesHC1:0,
      numeroDeCliquesHC2:0,
      numeroDeCliquesHC3:0,
    }

    this.HandleClick1 = this.HandleClick1.bind(this);
    this.HandleClick2 = this.HandleClick2.bind(this);
    this.HandleClick3 = this.HandleClick3.bind(this);


  }

   HandleClick1() {
    
    this.setState((estadoAnterior, _props)=> ({
      numeroDeCliquesHC1: estadoAnterior.numeroDeCliquesHC1+1
    }), () => {
      console.log(`Botão 1 ${this.GreenColor(this.state.numeroDeCliquesHC1)}`);
  });
}

  
   HandleClick2() {
    
     
     this.setState((estadoAnterior2, _props)=> ({
       numeroDeCliquesHC2: estadoAnterior2.numeroDeCliquesHC2+1
      }), () => {
        console.log(`Botão 2 ${this.GreenColor(this.state.numeroDeCliquesHC2)}`);
    });
  }
  
   HandleClick3() {
   
    this.setState((estadoAnterior3, _props) => ({
      numeroDeCliquesHC3: estadoAnterior3.numeroDeCliquesHC3+1
    }), () => {
      console.log(`Botão 3 ${this.GreenColor(this.state.numeroDeCliquesHC3)}`);
  });
}


  GreenColor(valor){
    return valor % 2 === 0 ? 'green' : 'white';
  }
  

  render(){
  
    const {numeroDeCliquesHC1, numeroDeCliquesHC2} = this.state;

    return (
      <div>
        <button onClick ={this.HandleClick1} style={{ backgroundColor: this.GreenColor(numeroDeCliquesHC1) }}>Botão 1 | Count = { numeroDeCliquesHC1 }</button>
        <button onClick ={this.HandleClick2} style={{ backgroundColor: this.GreenColor(numeroDeCliquesHC2) }}>Botão 1 | Count = { numeroDeCliquesHC2 }</button>
        <button onClick ={this.HandleClick3} style={{ backgroundColor: this.GreenColor(this.state.numeroDeCliquesHC3) }}>Botão 1 | Count = { this.state.numeroDeCliquesHC3 }</button>
      </div>
    );
}
};

export default App;