const decode = (codigo) => {
  let palavra = '';
  for (let i = 0; i < codigo.length; i += 1) {
    if (codigo[i] == 1) {
      palavra += 'a';
    } else if (codigo[i] === 2) {
      palavra += 'e';
    } else if (codigo[i] === 3) {
      palavra += 'i';
    } else if (codigo[i] === 4) {
      palavra += 'o';
    } else if (codigo[i] === 5) {
      palavra += 'u';
    } else {
      palavra += codigo[i];
    }
  }
  return palavra;
}

const encode = (mensagem) => {
  let codigo = '';

  for (let i = 0; i < mensagem.length; i += 1) {
    if (mensagem[i] === 'a') {
      codigo += 1;
    } else if (mensagem[i] === 'e') {
      codigo += 2;
    } else if (mensagem[i] === 'i') {
      codigo += 3;
    } else if (mensagem[i] === 'o') {
      codigo += 4;
    } else if (mensagem[i] === 'u') {
      codigo += 5;
    } else {
      codigo += mensagem[i];
    }
  }
  return codigo;
}

module.exports = { decode, encode };