const pool = require("./config/connection.js");
const fs = require("fs");

fs.readFile("./trainers.csv", "utf8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        let dataTrainers = data.split("\n").slice(1);
        let bulkText = [];
        let bulkValues = [];
        let counter = 1;
        for(let i = 0; i < dataTrainers.length; i++) {
            let values = dataTrainers[i].split(",");
            let singleText = [];
            for (let j = 0; j < values.length; j++) {
                singleText.push(`$${counter}`);
                bulkValues.push(values[j]);
                counter++;
            }
            bulkText.push(`(${singleText.join(",")})`);
        }

        const text = `INSERT INTO "Trainers" ("firstname", "lastname", "age", "points") VALUES ${bulkText.join(",")};`;
        const values = bulkValues;
        pool.query(text, values, (err, data) => {
            if (err) {
                console.log(`Error seeding data Trainers.`);
            } else {
                console.log(`Success seeding data Trainers.`);
                fs.readFile("./pokemons.csv", "utf8", (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        let dataPokemons = data.split("\n").slice(1);
                        let bulkText = [];
                        let bulkValues = [];
                        let counter = 1;
                        for(let i = 0; i < dataPokemons.length; i++) {
                            let values = dataPokemons[i].split(",");
                            let singleText = [];
                            for (let j = 0; j < values.length; j++) {
                                singleText.push(`$${counter}`);
                                bulkValues.push(values[j]);
                                counter++;
                            }
                            bulkText.push(`(${singleText.join(",")})`);
                        }
                
                        const text = `INSERT INTO "Pokemons" ("name", "type", "level", "status", "TrainerId") VALUES ${bulkText.join(",")};`;
                        const values = bulkValues;
                        pool.query(text, values, (err, data) => {
                            if (err) {
                                console.log(`Error seeding data Pokemons.`);
                            } else {
                                console.log(`Success seeding data Pokemons.`);
                            }
                            pool.end();
                        });
                    }
                });
            }
        });
    }
});