// const Person = require('./modules/Person');//node import
const $ = require('jquery');
import Person from './modules/Person';//es6 import

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

