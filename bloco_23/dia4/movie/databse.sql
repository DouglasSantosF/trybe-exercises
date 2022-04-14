DROP DATABASE IF EXISTS model_example2;

CREATE DATABASE model_example2;

USE model_example2;

 CREATE TABLE movie ( 
   id INT NOT NULL auto_increment,
   title VARCHAR(30) NOT NULL,
   directed_by VARCHAR(30) NOT NULL,
   release_year INT NOT NULL,
   PRIMARY KEY(id)
 ) ENGINE=INNODB;
