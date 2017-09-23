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
