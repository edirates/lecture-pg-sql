const { Pool } = require("pg");

const pool = new Pool ({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "PokemonGO",
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
});

module.exports = pool;