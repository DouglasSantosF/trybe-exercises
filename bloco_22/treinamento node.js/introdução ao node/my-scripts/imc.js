const calcucaIMC = (peso , altura) => {
  const resultado = (peso / Math.pow(altura,2)).toFixed(2);

  if(resultado < 18.5){
    return console.log(`${resultado} -> Abaixo do peso (magreza)`);
  }
  if(resultado >= 18.5 && resultado < 25.0) {
    return console.log(`${resultado} -> Peso normal`);
  }
  if(resultado >= 25.0 && resultado < 30.0) {
    return console.log(`${resultado} -> Acima do peso (sobrepeso)`);
  }
  if(resultado >= 30.0 && resultado < 35.0) {
    return console.log(`${resultado} -> Obesidade grau I`);
  }
  if(resultado >= 35.0 && resultado <= 39.9) {
    return console.log(`${resultado} -> Obesidade grau II`);
  }
  if(resultado >= 40.0) {
    return console.log( `${resultado} -> Obesidade grau III e IV`);
  }
}

module.exports = calcucaIMC;