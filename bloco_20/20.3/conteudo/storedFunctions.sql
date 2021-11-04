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


/* Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e
 retorna a quantidade total de filmes registrados nessa categoria. */
