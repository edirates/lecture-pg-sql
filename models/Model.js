const pool = require("../config/connection.js");
const Trainer = require("./Trainer.js");
const PokemonFactory = require("./PokemonFactory.js");

class Model {
    static findAll (table, cb) {
        // Code here
        if (table === "trainers") {
            const text = `SELECT * FROM "Trainers";`;
            pool.query(text, (err, res) => {
                if (err) {
                    cb(err);
                } else {
                    let data = res.rows;
                    const trainers = data.map((datum) => {
                        return new Trainer(datum);
                    });
                    cb(null, trainers);
                }
                pool.end();
            });
        }
        else if (table === "pokemons") {
            const text = `SELECT * FROM "Pokemons";`;
            pool.query(text, (err, res) => {
                if (err) {
                    cb(err);
                } else {
                    let data = res.rows;
                    const pokemons = data.map((datum) => {
                        return PokemonFactory.create(datum);
                    });
                    cb(null, pokemons);
                }
                pool.end();
            });
        }
    }
    static create (table, parameters, cb) {
        // Code here
        if (table === "trainers") {
            const firstname = parameters[0];
            const lastname = parameters[1];
            const age = +parameters[2];
            const points = +parameters[3];

            const text = `INSERT INTO "Trainers" ("firstname", "lastname", "age", "points") VALUES ($1, $2, $3, $4) RETURNING *;`;
            const values = [ firstname, lastname, age, points ];
            pool.query(text, values, (err, res) => {
                if (err) {
                    cb(err);
                } else {
                    let newTrainer = new Trainer(res.rows[0]);
                    cb(null, newTrainer);
                }
                pool.end();
            });
        }
        else if (table === "pokemons") {
            const name = parameters[0];
            const type = parameters[1];
            const level = +parameters[2];
            const status = parameters[3];
            const TrainerId = +parameters[4];

            const text = `INSERT INTO "Pokemons" ("name", "type", "level", "status", "TrainerId") VALUES ($1, $2, $3, $4, $5) RETURNING *;`;
            const values = [ name, type, level, status, TrainerId ];
            pool.query(text, values, (err, res) => {
                if (err) {
                    cb(err);
                } else {
                    let newPokemon = PokemonFactory.create(res.rows[0]);
                    cb(null, newPokemon);
                }
                pool.end();
            });
        }
    }
}

module.exports = Model;