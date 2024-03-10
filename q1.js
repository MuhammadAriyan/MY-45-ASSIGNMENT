"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
//question no. 13
var cars = ['ROLLS ROYCE PHANTOM', 'KAWASAKI NINJA', 'McLaren P1'];
console.log("i would like to own a ".concat(cars[0]));
console.log("iNSHALLAH I'LL BUY A ".concat(cars[2], " "));
console.log("i would love to have ".concat(cars[1]));
//question 14
var guest = ['shayan', 'aliyan', 'hassan'];
var invitation = " I HOPE YOU ARE DOING WELL AND EID-MUBARAK, AS YOU KNOW THAT TOMMOROW IS THIRD EID AND I WOULD LIKE TO INVITE YOU AND YOUR FAMILY TO ENJOY THE MOMENTS OF OUR LIFE , I WOULD BE HAPPY TO SEE YOU AT DINNER . YOUR FRIEND, ARYAN";
for (var _i = 0, guest_1 = guest; _i < guest_1.length; _i++) {
    var g = guest_1[_i];
    console.log("ASALAMUALAIKUM ".concat(g.toLocaleUpperCase(), ", ").concat(invitation));
}
//question 15
console.log(guest[2], " can't attend the dinner");
guest[2] = 'raiyan';
var newGuest = guest[2];
console.log(" ASALAMUALAIKUM ".concat(newGuest, ", ").concat(invitation));
//question no. 16 
var informMsg = " i have found a bigger dinner table";
for (var _a = 0, guest_2 = guest; _a < guest_2.length; _a++) {
    var gue = guest_2[_a];
    console.log('hey', gue, informMsg);
}
guest.unshift('Raziq');
guest.splice(2, 0, 'ahmed');
guest.push('huzaifa');
for (var _b = 0, guest_3 = guest; _b < guest_3.length; _b++) {
    var gues = guest_3[_b];
    console.log(gues);
    console.log("ASSALAMUALAIKUM!, HEY ".concat(gues, " I JUST GOT A NEW BIGGER DINNER TABLE I WOULD LIKE TO INVITE YOU AT MY HOME FOR A DINNER TONIGHT"));
}
//question 17
console.log('SORRY,I CAN ONLY INVITE TWO PEOPLES FOR DINNER');
while (guest.length > 2) {
    var remov = guest.pop();
    console.log("i am sorry ".concat(remov));
}
console.log("you are still invited ".concat(guest.join(' and ').toLocaleUpperCase()));
guest.pop();
guest.shift();
console.log(guest);
//question 18
var Place = ['makkah', 'madinah', 'japan', 'palestine', 'laughtale'];
console.log('originial order : ', Place);
console.log('alphabetical : ', __spreadArray([], Place, true).sort().join(' , '));
console.log('original : ', Place);
console.log('reverse alphabetical : ', __spreadArray([], Place, true).sort().reverse().join(' , '));
console.log('original order : ', Place);
Place.reverse();
console.log('reverse :', Place);
Place.reverse();
console.log('again reverse : ', Place);
Place.sort();
console.log('sort : ' + Place);
Place.reverse();
console.log('reverse alphabetical : ', Place);
//question no. 19
var invitedGuest = ['Raziq', 'shayan'];
var numberOfGuest = invitedGuest.length;
console.log('i invited ', numberOfGuest, ' guests.');
//question no. 20
var places = ['Mt.k2 pakistan', 'tokyo tower - japan',
    'makkah - Saudia Arabia', 'Mt. fuji - japan'];
console.log('places around the world'.toLocaleUpperCase());
for (var _c = 0, places_1 = places; _c < places_1.length; _c++) {
    var place = places_1[_c];
    console.log(place);
}
