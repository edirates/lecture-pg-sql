const Model = require("../models/Model.js");
const View = require("../views/View.js");

class Controller {
    static help() {
        View.help();
    }
    static findAll (table) {
        if (!table) {
            View.showInvalidInputs();
        } else {
            if (table !== "trainers" && table !== "pokemons") {
                View.showTableNotFound(table);
            } else {
                // Code here
                Model.findAll(table, (err, trainers) => {
                    if (err) {
                        View.showMessage(`Error : \n`, err);
                    } else {
                        View.showLog(trainers);
                    }
                });
            }
        }
    }
    static create (table, parameters) {
        if (!table || parameters.length < 4) {
            View.showInvalidInputs();
        } else {
            if (table !== "trainers" && table !== "pokemons") {
                View.showTableNotFound(table);
            } else {
                // Code here
                Model.create(table, parameters, (err, newData) => {
                    if (err) {
                        View.showMessage(`Error : \n`, err);
                    } else {
                        View.showAddSuccess(table, newData);
                    }
                });
            }
        }
    }
}

module.exports = Controller;