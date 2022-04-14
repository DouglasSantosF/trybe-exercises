const calcula = require('./exercicio1');

const randomNumber = async () => {

  const a = Math.floor(Math.random() * 100 + 1);
  const b = Math.floor(Math.random() * 100 + 1);
  const c = Math.floor(Math.random() * 100 + 1);

  try {
    return await calcula(a,b,c);
  } catch (error) {
    console.log(error);
  }
}



randomNumber()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));