const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'trybe123',
  database: 'model_example2'});

module.exports = connection; 