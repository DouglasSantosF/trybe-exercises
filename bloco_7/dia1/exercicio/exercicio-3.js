/* const fatorial = n =>  n = n*(n-1);

console.log(fatorial(5)); */

function fatorando(n){

  let fatorial = 1;

  while (fatorial<= n){
    fatorial = n*(n-1);
  }

  return fatorial;
}

console.log(fatorando(5));