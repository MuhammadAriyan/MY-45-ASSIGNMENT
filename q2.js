"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var idOfLuffy = {
    name: 'Monkey d Luffy',
    fatherName: 'Monkey d dragon',
    class: 0,
    greet: function () {
        console.log("hi my name is ".concat(this.name, ", I am in class ").concat(this.class, "."));
    }
};
//console.log(idOfLuffy.name)
//question no. 22
//let arr = [ 1 , 2 ,3 ,4]
//console.log(arr[5]) //which doesn't even exist
//question no. 23
var car = 'subaru';
console.log("is car=='subaru'?, I predict true");
console.log(car == 'subaru');
console.log("is car != 'subaru', I predict false");
console.log(car != 'subaru');
console.log("is car === 'subaru'?, I predict true");
console.log(car === 'subaru');
console.log("is car >= 'subaru, I predict true");
console.log(car >= 'subaru');
console.log("car <= 'subaru'? I predict true");
console.log(car <= 'subaru');
console.log("is car < 'toyota', I predict true");
console.log(car < 'toyota');
console.log("is car == 'toyota', I predict false");
console.log(car == 'toyota');
console.log("is car === 'Lamborghini'? , I predict false");
console.log(car === 'Lamborghini');
console.log('is car.lenght equal to 6?, I predict false');
console.log(car.length !== 6);
console.log("is car == 'toyota' or 'lamborghini', I predict false");
console.log(car == 'toyota' || car == 'lamborghini');
//questtion no. 24
//For equality and inequality 
var a = 'aryan';
var b = 'luffy';
console.log(a === b);
console.log(a !== b);
//Lower case 
var c = 'bRook';
var g = 'Franky';
console.log(b.toLowerCase() === c.toLowerCase());
console.log(c.toLowerCase() !== g.toLowerCase());
//Numericals test
var number = 4;
var number2 = 8;
console.log(number == number2);
console.log(number != number2);
console.log(number2 < number2);
console.log(number > number2);
console.log(number <= number2);
console.log(number >= number2);
//AND and OR operators
var condition = true;
var condition2 = false;
console.log(condition && condition2);
console.log(condition || condition2);
//Array
var nums = [1, 2, 3, 4];
if (nums.indexOf(3) !== -1) {
    console.log("the number is included");
}
else {
    console.log("number isnt included");
}
if (nums.indexOf(9) !== -1) {
    console.log("the number is included");
}
else {
    console.log("number isnt included");
}
if (nums.indexOf(2) !== -1) {
    console.log("the number is included");
}
else {
    console.log("number isnt included");
}
if (nums.indexOf(300) !== -1) {
    console.log("the number is included");
}
else {
    console.log("number isnt included");
}
//question no.25
//passed
var alien_color = 'green';
if (alien_color == 'green') {
    console.log('5+ points');
}
//cant passed
var alienColor = 'red';
if (alienColor == 'green') {
    console.log("5+ points");
}
//if not there is no output
//question no. 26 
var AlienColor = 'red';
if (AlienColor == 'green') {
    console.log("you got 5 points");
}
else {
    console.log("you got 10 points");
}
