/* Escreva uma query que exiba as seguintes informações de cada funcionário: id ,
 primeiro nome e dia do mês no qual foi contratado (exiba somente o dia). */

  SELECT EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE) AS 'HIRE_DAY'
  FROM hr.employees;

  -- OR

  SELECT EMPLOYEE_ID,
  FIRST_NAME,
  MID(HIRE_DATE,9,2) AS 'HIRE_DAY'
  FROM hr.employees; 

  -- OR

  SELECT EMPLOYEE_ID,
  FIRST_NAME,
  RIGHT(HIRE_DATE,2) AS 'HIRE_DAY'
  FROM hr.employees;
