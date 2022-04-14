const calcula = require('./exercicio1');

const randomNumber = () => {

  const a = Math.floor(Math.random() * 100 + 1);
  const b = Math.floor(Math.random() * 100 + 1);
  const c = Math.floor(Math.random() * 100 + 1);


  return calcula(a,b,c);
}

randomNumber()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));