## Postgres Integration with Node using NPM PG

Documentation reference for NPM PG = https://node-postgres.com/

Documentation reference for PostgreSQL =https://www.postgresqltutorial.com/

1. First step before using npm, we need to run `npm init` for generating file `package.json` that will contains all descriptions about our application including required dependencies =

   ```
   npm init
   ```

   Fill all informations needed or we can use `npm init -y` to automatically enter all of descriptions. Don't forget to fill the author description using your name.

2. Then run `npm install pg` to install package pg in order to communicate with postgres = 

   ```
   npm install pg
   ```

   After running this command, it will generates folder `node_modules` and `package-lock.json`.  Also, we can see at our `package.json`, there will be `pg` added in dependencies description. So the next time, we want to install our application, we just run `npm install` without knowing what dependencies needed in our application.

3. Since `node_modules` contains many files that are needed to run our application, we need to exclude this folder whenever we push our application into GitHub. So we need to create a new file named `.gitignore` and added `node_modules` inside of that file. So that, the next time we push our application into GitHub, it will ignore all files or folders inside `.gitignore`.

4. After that, we should create a new database first using Postgres GUI such as `Postico` or `PgAdmin`.

5. Next step, we need to make a connection from our application to postgres using driver `pg`. We can create a new file named `connection.js` and type this code =

   ```javascript
   const { Pool } = require("pg");
   
   const pool = new Pool ({
       user: "<username>",
       password: "<password>",
       host: "<localhost>",
       port: <port>,
       database: "<database_name>",
       max: 20,
       idleTimeoutMillis: 30000,
       connectionTimeoutMillis: 2000
   });
   
   module.exports = pool;
   ```

   > Default username dan password is` "postgres"` dan default port for postgres = `5432`.

6. After we have connected with postgres, we need to define our database structure using DDL, we can create a new file named `setup.js` and type this code =

   ```javascript
   const pool = require("./connection.js");
   
   const query = "<sql_statement>";
   
   pool.query(query, (err, res) => {
     // Handle the output here
   });
   ```

   > This is a general format for running a query. For more informations, you can read the documentation.

