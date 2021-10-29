/* Escreva uma query que exiba as seguintes informações de cada
 funcionário: id , primeiro nome e ano no qual foi contratado (exiba somente o ano). */

  SELECT EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE) 'HIRE_YEAR'
  FROM hr.employees;

  -- OR

  SELECT employee_id, first_name,
      LEFT(hire_date, 4) 'hire_year'
  FROM hr.employees;

  -- OR

  SELECT employee_id, first_name,
      MID(hire_date, 1, 4) 'hire_year'
  FROM hr.employees;
