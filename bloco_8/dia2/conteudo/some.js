const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((ar) => ar === name);
}

console.log(hasName(names, 'Ana'));