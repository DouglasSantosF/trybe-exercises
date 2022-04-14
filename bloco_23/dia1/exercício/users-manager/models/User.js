const connection = require('./connection');

  // Faremos a função `formatUser`
  // Note que não realizamos destructuring da senha, pois não precisaremos dela
  // Note, também, que renomeamos os campos fist_name e last_name para firstName e lastName, respectivamente

const formatUser = ({ id, first_name: firstName, last_name: lastName, email }) => {
  // A única coisa que precisamos fazer agora é criar um objeto com os nomes dos campos alterados
  // e sem o campo passowrd
  return {
    id,
    firstName,
    lastName,
    email,
  };

}

// Função responsável por criar o usuário no banco de dados

const create = async({ firstName, lastName, email, password }) => {

  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)';
  const [result] = await connection.execute(query, [firstName, lastName, email, password]);

  return ({ id: result.insertId, firstName, lastName, email });
}

module.exports = {
  formatUser,
  create
}