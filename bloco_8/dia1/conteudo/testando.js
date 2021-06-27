/* const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

function mult(numero) {
  console.log(numero * 2);
}

repeat(5, mult); */

const wakeUp = () => 'Acordando!!';
const coffeBreak = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (funct) => {
  const result = funct();
  return console.log(result);
}  

doingThings(sleep);