// parent Vehicle class
class Ninja {
    constructor(name, health=50) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`${this.name} is a master of ninjitsu`);
    }
    showStats() {
        console.log(`Health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Strength: ${this.strength}`);
    }
    drinkSake() {
        this.health += 10
        console.log(`Drinks Sake... Health now: ${this.health} `);
    }
}
let ninja = new Ninja('Naruto', 100);
ninja.sayName();ninja.showStats();ninja.drinkSake()