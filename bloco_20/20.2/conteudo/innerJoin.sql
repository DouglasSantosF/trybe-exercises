/* Monte uma query que exiba o id do ator , nome do ator e id do filme em que
 ele já atuou usando as tabelas actor e film_actor . */
  SELECT act.actor_id, act.first_name, film_id
  FROM sakila.actor act
  INNER JOIN sakila.film_actor f_act
  ON act.actor_id = f_act.actor_id;

/* Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários
 do banco. Use as tabelas staff e address . */
  SELECT
  CONCAT(st.first_name, ' ', st.last_name) AS Nome_completo,
  ad.address AS Endereço
  FROM sakila.staff st
  INNER JOIN sakila.address ad 
  ON st.address_id = ad.address_id;


/* Exiba o id do cliente , nome e email dos primeiros 100 clientes,
 ordenados pelo nome em ordem decrescente, juntamente com o id do endereço
  e o endereço onde o cliente mora. Essas informações podem ser encontradas
  nas tabelas customer e address . */
  customer_id AS 'ID do Cliente', 
  CONCAT(cust.first_name, ' ', cust.last_name) AS Nome_completo,
  cust.email,
  cust.address_id AS 'ID do Endereço',
  ad.address AS Endereço
  FROM sakila.customer cust
  INNER JOIN sakila.address ad 
  ON cust.address_id = ad.address_id
  ORDER BY Nome_completo DESC
  LIMIT 100;


/* Exiba o nome , email , id do endereço , endereço e distrito dos clientes
 que moram no distrito da California e que contêm "rene" em seus nomes.
 As informações podem ser encontradas nas tabelas address e customer . */
  SELECT
  CONCAT(cust.first_name, ' ', cust.last_name) AS Nome_completo,
  cust.email,
  cust.address_id AS 'ID do Endereço',
  ad.address AS Endereço,
  ad.district
  FROM sakila.customer cust
  INNER JOIN sakila.address ad 
  ON cust.address_id = ad.address_id
  WHERE ad.district = 'California'
  AND
  cust.first_name LIKE '%rene%';

/* Exiba o nome e a quantidade de endereços dos clientes cadastrados.
  Ordene seus resultados por nomes de forma decrescente.
  Exiba somente os clientes ativos. As informações podem ser encontradas
  na tabela address e customer . */
    SELECT 
      c.first_name, COUNT(a.address) AS `quantidade de endereço`
    FROM
      sakila.customer c
          INNER JOIN
      sakila.address AS a ON a.address_id = c.address_id
    WHERE
        c.active = 1
    GROUP BY c.first_name
    ORDER BY first_name DESC;

/* Monte uma query que exiba o nome , sobrenome e a média de valor ( amount )
 paga aos funcionários no ano de 2006. Use as tabelas payment e staff .
  Os resultados devem estar agrupados pelo nome e sobrenome do funcionário. */


/* Monte uma query que exiba o id do ator , nome , id do filme e título do filme ,
 usando as tabelas actor , film_actor e film .
  Dica: você precisará fazer mais de um JOIN na mesma query . */
