var names = ['Ling', 'Lian', 'Tom'];

// =============================================================

// names.forEach(function (name) {
//     console.log('forEach', name);
// });

// names.forEach((name) => {
//     console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!!';
// console.log(returnMe('Ling'));

// ==============================================================

// var person = {
//     name: 'Sam',
//     greet: function () {
//         names.forEach(function (name) {
//             console.log(this.name + ' say hi to ' + name)
//         });
//     }
// };

// var person = {
//     name: 'Sam',
//     greet: function () {
//         names.forEach((name) => {
//             console.log(this.name + ' say hi to ' + name)
//         });
//     }
// };

// person.greet();

// ===============================================================

function add (a, b) {
    return a + b;
}
console.log(add(1, 3));
console.log(add(9, 0));

var addStatement = (a, b) => { 
    return a + b;
}
var addExpression = (a, b) =>  a + b; 
console.log('addStatment(1, 3): ', addStatement(1, 3));
console.log('addExpression(9, 0): ', addExpression(9, 0));