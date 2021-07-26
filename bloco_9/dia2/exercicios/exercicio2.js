// Primeiramente, instancie uma Promise
// Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
// Se a soma de todos esses elementos for inferior a 8000,
// a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then , com um console.log('Promise resolvida') e um catch ,
// com um console.log('Promise rejeitada') à Promise ,
// só para que o código funcione e possamos ver o resultado.

const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject)=> {
    const arrayNumber = [];

    for(let i =0; i < 10; i+=1){
      const randomNUmber = Math.floor(Math.random() * 51);
      arrayNumber.push(randomNUmber*randomNUmber);
    }  
    
    const somaNumbers = arrayNumber.reduce((acc, current)=> acc+current, 0);
    
    if(somaNumbers < 8000){
      return resolve(somaNumbers);
    } else {
     reject(somaNumbers);
    }

   

  });

  myPromise
    .then((resolve) => console.log(`Promise resolvida, number: ${resolve}`))
    .catch((reject) => console.log(`Promise rejeitada, number: ${reject}`))
}

fetchPromise();