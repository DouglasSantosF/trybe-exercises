// Quando a promise for resolvida com sucesso, retorne um array com 4 itens,
// sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10.

const fetchPromise = () => {
const promise = new Promise((resolve, reject)=> {
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


promise
.then(sum => [2, 3, 5, 10].map(number => sum / number))
.catch(() => console.log('Promise rejeitada'));
};

fetchPromise();
