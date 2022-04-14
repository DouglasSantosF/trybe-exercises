

function calcula(a, b, c) {

  const promise = new Promise((resolve, reject)=> {
  
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){
      reject("Informe apenas números");
    }   

    
  
    const resultado = (a + b) * c;
    
    if(resultado < 50) {
      reject("Valor muito baixo");
    }

    resolve(resultado);

  });
  return promise;
}

/* calcula(18,2,3)
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); */

  module.exports = calcula;