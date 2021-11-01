/* Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados. */
  SELECT Id, Title FROM hotel.Books as B
    WHERE NOT EXISTS(
	SELECT * FROM hotel.Books_Lent
    WHERE book_id =  B.id
  );    


/* Usando o EXISTS na tabela books_lent e books , 
exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título. */



/* Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro. */



/* Usando o comando EXISTS em conjunto com JOIN e as tabelas cars ,
 customers e carsales , exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros. */
