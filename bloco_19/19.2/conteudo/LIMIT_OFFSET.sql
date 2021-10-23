/* Para pular uma certa quantidade de linhas do seu resultado, você pode usar o comando OFFSET . */

# Query + LIMIT quantidade_de_linhas OFFSET quantidade_de_linhas
SELECT * FROM sakila.rental LIMIT 10 OFFSET 3;