const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


function verificaPares(obj, chave, valor){
  
  const pares = Object.entries(obj);
  let contem = false;

  for(let index in pares){
    if(pares[index][0] === chave && pares[index][1] === valor){
      contem = true;
    }
  }

  return contem;

}

console.log(verificaPares(lesson3,'professor','Maria Clara'));

let test = Object.entries(lesson2);
console.log(test[0][0]);