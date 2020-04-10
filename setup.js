const pool = require("./config/connection.js");

const dropTrainers = `DROP TABLE IF EXISTS "Trainers" CASCADE;`;

const dropPokemons = `DROP TABLE IF EXISTS "Pokemons" CASCADE;`;

const createTrainers = `
    CREATE TABLE IF NOT EXISTS "Trainers" (
        "id" serial PRIMARY KEY,
        "firstname" VARCHAR (50) NOT NULL,
        "lastname" VARCHAR (50) NOT NULL,
        "age" INTEGER,
        "points" INTEGER DEFAULT 0
    );
`;

const createPokemons = `
    CREATE TABLE IF NOT EXISTS "Pokemons" (
        "id" serial PRIMARY KEY,
        "name" VARCHAR (50) NOT NULL,
        "type" VARCHAR (50) NOT NULL,
        "level" INTEGER DEFAULT 0,
        "status" BOOLEAN DEFAULT false,
        "TrainerId" INTEGER,
        FOREIGN KEY ("TrainerId") REFERENCES "Trainers" ("id")
        ON UPDATE CASCADE ON DELETE CASCADE
    );
`;

pool.query(dropTrainers, (err, res) => {
    if (err) {
        console.log(`Error deleting table Trainers.`, err);
    } else {
        console.log(`Success deleting table Trainers.`);
        pool.query(dropPokemons, (err, res) => {
            if (err) {
                console.log(`Error deleting table Pokemons.`, err);
            } else {
                console.log(`Success deleting table Pokemons.`);
                pool.query(createTrainers, (err, res) => {
                    if (err) {
                        console.log(`Error creating table Trainers.`, err);
                    } else {
                        console.log(`Success creating table Trainers.`);
                        pool.query(createPokemons, (err, res) => {
                            if (err) {
                                console.log(`Error creating table Pokemons.`, err);
                            } else {
                                console.log(`Success creating table Pokemons.`);
                                pool.end();
                            }
                        });
                    }
                });
            }
        });
    }
});






