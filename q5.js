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
function make_album(artist, title, track) {
    var album = {
        artist: artist.charAt(0).toLocaleUpperCase() + artist.slice(1),
        title: title.charAt(0).toLocaleUpperCase() + title.slice(1),
    };
    if (track !== undefined) {
        album.track = track;
    }
    return album;
}
var singer1 = make_album('weekend', 'popular');
var singer2 = make_album('atif aslam', 'tera hone lga hu');
var singer3 = make_album('arjeet singh', 'tum hi ho', 14);
console.log(singer1);
console.log(singer2);
console.log(singer3);
//question no. 41
function magicBoys() {
    var magic = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        magic[_i] = arguments[_i];
    }
    return __spreadArray([], magic, true);
}
var m1 = magicBoys('Dr.aloo', 'DR.jhtka', 'prof.magic', 'engineer majikmajak');
var m2 = magicBoys('kaloo jadoogar');
console.log(m1);
console.log(m2);
//question no. 42
function make_great() {
    var nameOfM = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nameOfM[_i] = arguments[_i];
    }
    for (var i = nameOfM.length; i > 0; i--) {
        console.log("the great ".concat(nameOfM[i]));
    }
}
make_great('Dr.aloo', 'DR.jhtka', 'prof.magic', 'engineer majikmajak', 'bob the magic');
//question no. 43
function makeGreat(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        greatMagicians.push("Great " + magician);
    }
    return greatMagicians;
}
function showMagicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
var magicians = ['Dr.aloo', 'DR.jhtka', 'prof.magic', 'engineer majikmajak', 'bob the magic'];
var originalMagicians = __spreadArray([], magicians, true);
var greatMagicians = makeGreat(__spreadArray([], magicians, true));
console.log("Original Magicians:");
showMagicians(originalMagicians);
console.log("Great Magicians:");
var ab = makeGreat(magicians);
console.log(ab);
//QUESTION NO. 44
function sandwiches() {
    var order = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        order[_i] = arguments[_i];
    }
    console.log('YOUR ORDERED FLAVOR: ');
    for (var _a = 0, order_1 = order; _a < order_1.length; _a++) {
        var sandwich = order_1[_a];
        console.log([sandwich]);
    }
    var s = [console.log.apply(console, __spreadArray(__spreadArray(['you ordered a sandwitch with'], order, false), [' flavour'], false))];
    return s;
}
sandwiches('bbq');
sandwiches('cheese');
sandwiches('veg', 'pineapple');
function car_make(car_name, model, specification) {
    return {
        car_name: car_name,
        model: model,
        specification: specification
    };
}
console.log(car_make('NISSAN', 'GTR', ['COLOR : RED', 'MAX. SPEED = 340KM/H']));
