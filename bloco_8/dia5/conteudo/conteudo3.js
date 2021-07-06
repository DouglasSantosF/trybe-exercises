// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Manga', 'Uva', 'Maçã'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite Condensado', 'Calda', 'Granola'];

const fruitSalad = (fruit, additional) => {
  
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));