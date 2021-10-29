/* Escreva uma query que exiba quatro informações:
 o maior salário, o menor salário, a soma de todos os salários e a média dos salários.
  Todos os valores devem ser formatados para ter apenas duas casas decimais. */

SELECT
MIN(SALARY) AS MENOR_SALARIO,
SUM(SALARY) AS MAIOR_SALARIO,
SUM(SALARY) AS SOMA_SALARIO,
ROUND(AVG(SALARY), 2) AS MEDIA_SALARIO
FROM hr.employees;