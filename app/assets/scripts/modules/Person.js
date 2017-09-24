// function Person(name,color) {
//     this.name = name;
//     this.color = color;
//     this.greet = function() {
//         console.log(this.name +' hello there');
//     };
// }
class Person {
    constructor(name,color) {
        this.name = name;
        this.color = color;
    }
    greet() {
        console.log(this.name +' hi there');
    }
}
// module.exports = Person; //node export
export default Person;
class Adult extends Person {//класс Adult наследует Person
    payTaxes() {
        console.log(this.name + ' ownes taxes');
    }
}

var john = new Person('John Smisth');
john.greet();
var kate = new Adult('Kate');
kate.greet();
kate.payTaxes();