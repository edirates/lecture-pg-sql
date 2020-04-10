# SQL Statements

Reference Link = https://www.postgresqltutorial.com/

### Data Definition Language (DDL)

A syntax similar to a computer programming language for defining data structures, especially database schemas. DDL statements create and modify database objects such as tables, indexes, and users. 

```sql
-- To create new database
CREATE DATABASE "<database_name>";

-- To create new table
CREATE TABLE [IF NOT EXISTS] "<table_name>" (
	"<column_name1>" <TYPE> <CONSTRAINT>,
  "<column_name2>" <TYPE> <CONSTRAINT>
);

-- To add new column
ALTER TABLE "<table_name>" 
ADD COLUMN "<column_name>" <TYPE> <CONSTRAINT>;

-- To remove existing column
ALTER TABLE "<table_name>" 
DROP COLUMN "<column_name>";

-- To delete existing table
DROP TABLE [IF EXISTS] "<table_name>";
```



### Data Manipulation Language (DML)

A computer programming language used for adding (inserting), deleting, and modifying (updating) data in a database (CRUD operations).

```sql
-- Create new data record
INSERT INTO "<table_name>" ( "<column_name1>", "<column_name2>" )
VALUES ( '<value1>', '<value2>' );

-- Update existing data record
UPDATE "<table_name>"
SET  
	"<column_name1>" = '<value1>',
	"<column_name2>" = '<value2>'
WHERE ( condition );

-- Delete existing data record
DELETE FROM "<table_name>"
WHERE ( condition );

-- Read all data records in a table
SELECT * FROM "<table_name>";

-- Filter data records using LIKE operator ( use % as wildcard )
SELECT * FROM "<table_name>"
WHERE "<column_name>" LIKE '%<value>%';

-- Filter data records using BETWEEN operator
SELECT * FROM "<table_name>"
WHERE "<column_name>" BETWEEN <value1> AND <value2>;

-- Filter data record using AND / OR operator
SELECT * FROM "<table_name>"
WHERE ( condition1 )  AND ( condition2 );

-- Sorting data record using ORDER BY operator
SELECT * FROM "<table_name>"
ORDER BY "<column_name>" DESC;

-- Limit shown data record using LIMIT operator
SELECT * FROM "<table_name>"
LIMIT <number_rows_to_show>;

-- Join tables using INNER JOIN operator
SELECT 
	*
FROM 
	"<table_name1>"
INNER JOIN
	"<table_name2>"
ON 
	"<table_name1>"."<primary_key>" = "<table_name2>"."<foreign_key>";

-- Group duplicate values in column using GROUP BY operator
SELECT 
	"<column_name>",
	COUNT(*) AS "<alias_name>"
FROM 
	"<table_name>"
GROUP BY 
	"<column_name>";
```