/* Monte uma procedure que exiba os 10 atores mais populares,
baseado em sua quantidade de filmes.
Essa procedure não deve receber parâmetros de entrada ou saída e,
quando chamada, deve exibir o id do ator ou atriz e
a quantidade de filmes em que atuaram. */

  USE sakila;
  DELIMITER $$

  CREATE PROCEDURE busca10AtoresMaisPopulares()
  BEGIN
    SELECT actor_id, COUNT(*) AS 'quantidade de filmes'
      FROM film_actor
      GROUP BY actor_id
      ORDER BY COUNT(*) DESC
      LIMIT 10;
  END $$
  DELIMITER ;


/* Monte uma procedure que receba como parâmetro de entrada o nome
da categoria desejada em uma string e que exiba o id do filme ,
seu titulo , o id de sua categoria e o nome da categoria selecionada.
Use as tabelas film , film_category e category para montar essa procedure. */
  USE sakila;
  DELIMITER $$

  CREATE PROCEDURE retornaFilmesPelaCategoria( IN categoria VARCHAR(100))
  BEGIN
    SELECT f.film_id, f.title, fc.category_id, c.name
      FROM sakila.film f
      INNER JOIN sakila.film_category fc ON f.film_id = fc.film_id
      INNER JOIN sakila.category c ON c.category_id = fc.category_id
      WHERE c.name = categoria;
  END $$

  DELIMITER 


/* Monte uma procedure que receba o email de um cliente como parâmetro
 de entrada e diga se o cliente está ou não ativo,
 através de um parâmetro de saída. */
  USE sakila;
  DELIMITER $$

  CREATE PROCEDURE verificaSeClienteEAtivo(IN emailCLiente VARCHAR(100), OUT isActive BOOL )
  BEGIN
    SET isActive = (
          SELECT active
          FROM sakila.customer
          WHERE email = emailCLiente
      );
  END $$
  DELIMITER ;

  -- Como usar:

SELECT @ActiveStatus;
CALL CheckIfActiveClient('MARY.SMITH@sakilacustomer.org', @ActiveStatus);
SELECT @ActiveStatus