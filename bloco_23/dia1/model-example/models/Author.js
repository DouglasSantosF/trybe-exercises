const connection = require('./connection');

// funcão serialize serve pra trocar o padrão de snake_Name para cammelCase
const serialize = (authorData) => {
  return {
    "id": authorData.id,
    "firstName": authorData.first_name,
    "middleName": authorData.middle_name,
    "lastName": authorData.last_name
  }
}

// funcão authorFullName adiciona o campo fullName no objeto
const authorFullName = ({id, firstName, middleName, lastName}) => {

  // como pode ter autores que não tem o campo middleName, vamos usar o filter para ele
  // concatenar todos os autores que tiver pelo menos um desses campos preenchidos
  // mesmo sem o campo middleName, ele irá funcionar
  const fullName = [firstName, middleName, lastName].filter((name) => name).join(" ");

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName
  }

}

// funcão isValid verifica se os nomes estão válidos para serem inseridos na tabela
const isValid = (firstName, middleName,lastName) => {

  if(!firstName || typeof firstName !== "string") return false;
  if(!lastName || typeof lastName !== "string") return false;
  if(typeof middleName !== "string") return false;

  return true;

}

const getAll = async () => {
  const [result] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
  return result.map(serialize).map(authorFullName);
}

const findById = async (id) => {

  const [result] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors WHERE id = ?', [id]);
  if(result.length === 0) return false;
  return result.map(serialize).map(authorFullName);
}

const createAuthor = async (firstName, middleName, lastName) => {
   await connection.execute('INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
  [firstName, middleName, lastName])
}

const update = async (id, firstName, middleName, lastName) => {

  const [result] = await connection.execute('SELECT id FROM authors WHERE id= ?', [id]);
  if(result.length === 0 ) return false;

  await connection.execute('UPDATE model_example.authors SET first_name = ?, middle_name = ?, last_name = ? WHERE id = ?',
  [firstName, middleName, lastName, id]);

}

const deleteAuthor = async (id) => {

  const [result] = await connection.execute('SELECT id FROM authors WHERE id= ?', [id]);
  if(result.length === 0 ) return null;

  await connection.execute('DELETE FROM model_example.authors WHERE id = ?', [id]);

}

module.exports = {
  getAll,
  findById,
  isValid,
  createAuthor,
  update,
  deleteAuthor
}