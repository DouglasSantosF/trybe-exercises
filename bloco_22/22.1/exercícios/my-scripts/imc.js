const {questionInt, questionFloat} = require('readline-sync');

function calculaImc () {
  const peso = questionFloat('Qual o seu peso? (em kg)');
  const altura = questionInt('Qual a sua altura? (em cm)');

  console.log(`Peso: ${peso}, Altura ${altura}`);
  
  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  if( imc < 18.5) {
    return  console.log(`IMC : ${imc} => Abaixo do peso(magreza)`);
  }
  if( imc >= 18.5 && imc < 25) {
    return console.log(`IMC : ${imc} => Peso normal)`);
  }
  if( imc >= 25.0 && imc < 30) {
    return console.log(`IMC : ${imc} => Acima do peso(sobrepeso)`);
  }
  if( imc >= 30.0 && imc < 35) {
    return console.log(`IMC : ${imc} => Obesidade grau I`);
  }
  if( imc >= 35.0 && imc < 40) {
    return console.log(`IMC : ${imc} => Obesidade grau II)`);
  }
  
  return console.log(`IMC : ${imc} => Obesidade graus III e IV`);
  
}

calculaImc();