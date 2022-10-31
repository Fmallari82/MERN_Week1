const Card = require('./Card.js')

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost)
        this.power = power
        this.res = res;
    }
    attack(target) {
        console.log(`${this.name} has attacked ${target.name}`)
        target.res -= this.power
        if(target.res < 0) {
            console.log (`${target.name} is dead`)
        }
    }
}

class Effect extends Card {
    constructor(name, cost, stat, magnitude) {
        super(name, cost)
        this.stat = stat
        this.magnitude = magnitude
    }
    attack(target) {
        if (this.stat = 'resilience' && this.magnitude >= 0) {
            console.log(`increased ${target.name} resilence by ${this.magnitude}`)
            target.res += this.magnitude
            
        }
        if (this.stat = 'resilience' && this.magnitude < 0) {
            console.log(`reduce target's resilence by ${this.magnitude}`)
            target.res += this.magnitude
            
        }
        else {
            console.log(`increase target's power by ${this.magnitude}`)
            target.power += this.magnitude
            
        }
        if(target.res < 0) {
            console.log (`${target.name} is dead`)
        }
        return
    
    } effect() {
        this.power
    }
}

let redBelt = new Unit('Red Belt', 3, 3, 4)
let blackBelt = new Unit('Black Belt', 4, 5, 4)
// console.log(redBelt, blackBelt);

let hardAlgorithm = new Effect('Hard Algorithm', 2, 'resilience', +3)
let unhandledPromise = new Effect('Unhandled Promise Rejection', 1, 'resilience', -2)
let pairProgramming = new Effect('Pair Programming', 3, 'power', +2)
// console.log(unhandledPromise)
console.log(redBelt)
unhandledPromise.attack(redBelt)
hardAlgorithm.attack(redBelt)
console.log(redBelt)
pairProgramming.attack(redBelt)
console.log(redBelt)
console.log(blackBelt)
redBelt.attack(blackBelt)
console.log(blackBelt)