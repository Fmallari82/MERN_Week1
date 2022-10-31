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
        console.log(`Name: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Strength: ${this.strength}`);
        return
    }
    drinkSake() {
        this.health += 10
        console.log(`Drinks Sake... Health now: ${this.health} `);
    }
}
// let ninja = new Ninja('Naruto', 100);
// ninja.sayName();ninja.showStats();ninja.drinkSake()

class Sensei extends Ninja {
    constructor(name, health=200) {
        super(name, health);
        this.speed = 10
        this.strength =10
        this.wisdom= 10
        return
    }
    speakWisdom() {
        // by using super, we can call the parent method
        const sake = super.drinkSake();
        console.log(sake);
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        return 
    }
}
const sensei = new Sensei('Kakashi');
sensei.speakWisdom().showStats()