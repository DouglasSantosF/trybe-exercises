/* Essa é a tabela staff do banco de dados sakila . Como você poderia responder às seguintes questões? */

/* Quantas senhas temos cadastradas nessa tabela? */
  SELECT count(password) FROM sakila.staff;
  1

/* Quantas pessoas temos no total trabalhando para nossa empresa? */
  SELECT COUNT(staff_id) FROM sakila.staff;
  2

/* Quantos emails temos cadastrados nessa tabela? */
  SELECT COUNT(email) FROM sakila.staff;
  2
