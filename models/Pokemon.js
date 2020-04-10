class Pokemon {
    constructor (pokemon) {
        this.id = +pokemon.id;
        this.name = pokemon.name;
        this.type = pokemon.type;
        this.level = pokemon.level;
        this.status = pokemon.status;
        this.TrainerId = pokemon.TrainerId;
    }
}

class Electric extends Pokemon {}

class Fire extends Pokemon {}

class Grass extends Pokemon {}

class Rock extends Pokemon {}

class Water extends Pokemon {}

module.exports = {
    Pokemon,
    Electric,
    Fire,
    Grass,
    Rock,
    Water
};