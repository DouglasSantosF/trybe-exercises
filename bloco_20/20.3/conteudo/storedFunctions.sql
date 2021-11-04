/* Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos
 feitos até o momento por um determinado customer_id . */
  USE sakila;
  DELIMITER $$

  CREATE FUNCTION retornaQtdDePagamentosPeloCostumerID(customerID INT)
  RETURNS INT READS SQL DATA
  BEGIN
    DECLARE QNTPagamentos INT;
      SELECT COUNT(*)
      FROM sakila.payment
      WHERE customer_id = customerID INTO QNTPagamentos;
      RETURN QNTPagamentos;
  END $$
  DELIMITER ;
    

/* Crie uma function que, dado o parâmetro de entrada inventory_id ,
 retorna o nome do filme vinculado ao registro de inventário com esse id. */
  USE sakila;

  DELIMITER $$

  CREATE FUNCTION returnFilmePeloInventoryID( ID INT )
  RETURNS VARCHAR(100) READS SQL DATA
  BEGIN
  DECLARE nomeDoFilme VARCHAR(100);
  SELECT t1.title 
    FROM sakila.film as t1
      INNER JOIN
      sakila.inventory as t2
      ON t1.film_id = t2.film_id
      WHERE t2.inventory_id = ID INTO nomeDoFilme;
      RETURN NomeDoFilme;
  END $$
  DELIMITER ;


/* Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e
 retorna a quantidade total de filmes registrados nessa categoria. */

  USE sakila;
  DELIMITER $$

  CREATE FUNCTION retornaQntDeFilmesRegistrado( nomeCategoria VARCHAR(100))
  RETURNS INT READS SQL DATA
  BEGIN
    DECLARE quantidadeDeFilme INT;
      SELECT COUNT(*) FROM sakila.category as t1
      INNER JOIN sakila.film_category as t2
      ON t1.category_id = t2.category_id
      WHERE t1.name = nomeCategoria INTO quantidadeDeFilme;
      RETURN quantidadeDeFilme;
  END $$

  DELIMITER ;