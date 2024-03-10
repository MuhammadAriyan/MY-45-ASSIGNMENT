//question no. 27
//let alienColor = 'red'
//let alienColor = 'green'
var alienColor = 'yellow';
if (alienColor == 'red') {
    console.log("you got 15 points");
}
if (alienColor == 'yellow') {
    console.log("you got 10 points");
}
if (alienColor == 'green') {
    console.log("you got 5 points");
}
//question no. 28
var age = 10669;
if (age < 2) {
    console.log("is a baby");
}
if (age >= 2 && age < 4) {
    console.log("ia a toddler");
}
if (age >= 4 && age < 13) {
    console.log('is a kid');
}
if (age >= 13 && age < 20) {
    console.log("is a teenager");
}
if (age >= 20 && age < 65) {
    console.log("is an adult");
}
if (age >= 65) {
    console.log("is an elder");
}
//question no. 29
var favorite_fruits = ['MANGO', 'APPLE', 'PINEAPPLE'];
if (favorite_fruits.indexOf('MANGO') !== -1) {
    console.log("you really love mangos");
}
if (favorite_fruits.indexOf('APPLE') !== -1) {
    console.log("you really love apples");
}
if (favorite_fruits.indexOf('kiwi') !== -1) {
    console.log("you really love kiwi");
}
if (favorite_fruits.indexOf("PINEAPPLE") !== -1) {
    console.log("you really love pineapple");
}
if (favorite_fruits.indexOf('PEACH') !== -1) {
    console.log("you really love peach");
}
//question no. 30
var members = ['admin', '@rizz_bhaiya', '@shayan', '@aliyan', '@ebbad'];
for (var _i = 0, members_1 = members; _i < members_1.length; _i++) {
    var member = members_1[_i];
    if (member == 'admin') {
        console.log('HELLO, ADMIN WOULD YOU LIKE TO SEE A STATUS REPORT?');
    }
    else {
        console.log("hello ".concat(member, " , thamks for logging in again"));
    }
}
//question no. 31
members = [];
if (members.length === 0) {
    console.log('We need to find users');
}
else {
    for (var _a = 0, members_2 = members; _a < members_2.length; _a++) {
        var member = members_2[_a];
        if (member === 'admin') {
            console.log('Hello Admin, wanna would you like to see a status report?');
        }
        else {
            console.log('hello ${member} thank you for logging in again');
        }
    }
}
//question no.32
function checkUsernames(current_users, new_users) {
    var _loop_1 = function (new_user) {
        var isDuplicate = current_users.some(function (username) { return username.toLowerCase() === new_user.toLowerCase(); });
        if (isDuplicate) {
            console.log("The username '".concat(new_user, "' is already taken. Please enter a new username."));
        }
        else {
            console.log("The username '".concat(new_user, "' is available."));
        }
    };
    for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
        var new_user = new_users_1[_i];
        _loop_1(new_user);
    }
}
var current_users = ["gAnjiswag", "admin", "shinchan", "doraemon", "alexbhatti"];
var new_users = ["dr.jhatka", "gAnjiswag", "admin", "kalluShapatr", "babaFranklin"];
checkUsernames(current_users, new_users);
//question no.33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var number in numbers) {
    if (number === '1') {
        console.log(number, 'st');
    }
    else if (number === '2') {
        console.log(number, 'nd');
    }
    else if (number === '3') {
        console.log(number, 'rd');
    }
    else {
        console.log(number, 'th');
    }
}
//question no. 34
var pizzas = ['pineapple', 'cheese', 'pepperoni'];
for (var _b = 0, pizzas_1 = pizzas; _b < pizzas_1.length; _b++) {
    var pizza = pizzas_1[_b];
    console.log("i like ".concat(pizza, " pizza"));
}
console.log("i love pizza so much like its my life.and i wish i had a pizza castle..");
console.log("like its more than life its delightly flavour satisfies my heart like a melody.."); //stop forcing us to say these things i love biryani 
console.log("thats the most delicious thing i have ever eaten..");
console.log("i really love pizza ");
//question no 35
var animals = ['panda', 'polar bear', 'grizzly bear'];
for (var _c = 0, animals_1 = animals; _c < animals_1.length; _c++) {
    var animal = animals_1[_c];
    console.log("a ".concat(animal, " will make a good pet"));
}
console.log(" these animals have one thing in common which is it's cuteness");
console.log("and any of these animal will be a good pet");
//question no. 36
function make_shirts(size, text) {
    console.log("you ordered a ".concat(size, " shirt,with the text ").concat(text));
}
make_shirts('XL', 'aryan');
//question no. 37
function makeShirts(sizeShirt, textShirt) {
    if (sizeShirt === void 0) { sizeShirt = 'large'; }
    if (textShirt === void 0) { textShirt = ' i love typescript'; }
    console.log("you ordered a ".concat(sizeShirt, " shirt,with the text ").concat(textShirt));
}
makeShirts();
function MakeShirt(SizeShirt, TextShirt) {
    if (SizeShirt === void 0) { SizeShirt = 'medium'; }
    if (TextShirt === void 0) { TextShirt = 'i love typescipt'; }
    console.log("you ordered a ".concat(SizeShirt, " shirt,with the text ").concat(TextShirt));
}
makeShirts();
makeShirts('small', 'Aryan');
//question no. 38
function describe_city(city, country) {
    if (country === void 0) { country = 'pakistan'; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city('karachi');
describe_city('tokyo', 'japan');
describe_city('hyderabad');
//question no.39
function city_country(City, Country) {
    return ("".concat(City, " , ").concat(Country));
}
var a = city_country('karachi', 'pakistan');
var b = city_country('lahore', 'pakistan');
var c = city_country('tokyo', 'japan');
console.log(a);
console.log(b);
console.log(c);
