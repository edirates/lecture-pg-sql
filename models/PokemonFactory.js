const { Pokemon, Electric, Fire, Grass, Rock, Water } = require("./Pokemon.js");

class PokemonFactory {
    static create (pokemon) {
        if (pokemon.type.toLowerCase() === "electric") {
            return new Electric (pokemon);
        } else if (pokemon.type.toLowerCase() === "fire") {
            return new Fire (pokemon);
        } else if (pokemon.type.toLowerCase() === "grass") {
            return new Grass (pokemon);
        } else if (pokemon.type.toLowerCase() === "rock") {
            return new Rock (pokemon);
        } else if (pokemon.type.toLowerCase() === "water") {
            return new Water (pokemon);
        } else {
            return new Pokemon (pokemon);
        }
    }
}

module.exports = PokemonFactory;