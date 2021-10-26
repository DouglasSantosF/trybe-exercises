/* Insira um novo funcionário na tabela sakila.staff . */
/* Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione "Table Inspector".*/

/* Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar.
  Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa explorada!*/
  
  INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username)
  VALUES('Douglas', 'Santos', 2,'alguem@alguem.com', 2, 1, 'Doug');



/* Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query . */
    INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username)
    VALUES
    ('John', 'Snow', 5,'john@stark.com', 2, 1, 'Ghost'),
    ('Son', 'Goku', 3, 'Goku@corpcapsule.com',1,1, 'kakarotto');


/* Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor . */
  INSERT INTO sakila.actor (first_name, last_name)
  SELECT first_name, last_name
  FROM sakila.customer
  LIMIT 5; 

/* Cadastre três categorias de uma vez só na tabela sakila.category . */
  INSERT INTO sakila.category (name) VALUES
  ('Anime'),
  ('Politic'),
  ('Police');

/* Cadastre uma nova loja na tabela sakila.store . */