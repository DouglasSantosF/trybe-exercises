/* Escreva uma query que exiba as seguintes informações de cada
 funcionário: id , primeiro nome e mês no qual foi contratado (exiba somente o mês). */

  SELECT EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE) AS 'HIRE_MONTH'
  FROM hr.employees;

  -- OR

  SELECT EMPLOYEE_ID,
  FIRST_NAME,
  MID(HIRE_DATE,6,2) AS 'HIRE_MONTH'
  FROM hr.employees; 

  -- OR

  SELECT EMPLOYEE_ID,
  FIRST_NAME,
  SUBSTRING(HIRE_DATE,6,2) AS 'HIRE_MONTH'
  FROM hr.employees;