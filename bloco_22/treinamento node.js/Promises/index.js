
const exemplo = async (p1, p2, p3) => {
  
  if(typeof p1 !== "number" || typeof p2 !== "number" 
    || typeof p3 !== "number") {
      throw Error("Informe apenas números");
    }
  
  const soma = ((p1 + p2) * p3);

  if(soma < 50) {
    throw Error("Valor muito baixo"  )
  }
  Promise.resolve(soma);
  return soma;
}



const randomNumbers = () => Math.floor(Math.random() * 100 + 1);

const numbA = randomNumbers();
const numbB = randomNumbers();
const numbC = randomNumbers();

//console.log(exemplo(numbA,numbB,numbC));

exemplo(1,2,4)
.then((result)=> console.log(result))
.catch((error)=> console.log(error.message));