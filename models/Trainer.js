class Trainer {
    constructor (trainer) {
        this.id = +trainer.id;
        this.firstname = trainer.firstname;
        this.lastname = trainer.lastname;
        this.age = trainer.age;
        this.points = trainer.points;
    }
    get fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}

module.exports = Trainer;