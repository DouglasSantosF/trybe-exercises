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

let allLessons = Object.assign({},{lesson1,lesson2,lesson3});

function totalStudant(obj){

  const keys = Object.keys(obj);
  let total =0;

  for(index =0; index < keys.length; index+=1){

    total += obj[keys[index]].numeroEstudantes
  } 
  return total;

}

console.log(totalStudant(allLessons));

