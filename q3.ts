//question no. 27
//let alienColor = 'red'
//let alienColor = 'green'
let alienColor = 'yellow'

if (alienColor == 'red'){
    console.log(`you got 15 points`)
}if (alienColor == 'yellow'){
    console.log(`you got 10 points`)
}if (alienColor == 'green'){
    console.log(`you got 5 points`)
}

//question no. 28
let age = 10669
if(age<2){
    console.log(`is a baby`)
}if (age>=2 && age<4){
    console.log(`ia a toddler`)
}if (age>=4 && age<13 ){
    console.log('is a kid')
}if (age>=13 && age<20){
    console.log(`is a teenager`)
}if (age>=20 && age<65){
    console.log(`is an adult`)
}if(age >= 65 ){
    console.log(`is an elder`)
}

//question no. 29
let favorite_fruits = ['MANGO','APPLE', 'PINEAPPLE']
if (favorite_fruits.indexOf('MANGO')!==-1){
    console.log(`you really love mangos`)
}
if(favorite_fruits.indexOf('APPLE')!==-1){
    console.log(`you really love apples`)
}
if(favorite_fruits.indexOf('kiwi') !==-1){
    console.log(`you really love kiwi`)
}
if (favorite_fruits.indexOf("PINEAPPLE") !==-1){
    console.log(`you really love pineapple`)
}
if(favorite_fruits.indexOf('PEACH')!==-1){
    console.log(`you really love peach`)
}

//question no. 30
let members = [ 'admin', '@rizz_bhaiya', '@shayan', '@aliyan','@ebbad']
for (const member of members) {
    if(member =='admin'){
        console.log('HELLO, ADMIN WOULD YOU LIKE TO SEE A STATUS REPORT?')
    }else{
        console.log(`hello ${member} , thamks for logging in again`)
    }
}

//question no. 31

members = []
if( members.length === 0) {
   console.log('We need to find users')
}else {
   for( let member of members){
       if( member==='admin') {
      console.log('Hello Admin, wanna would you like to see a status report?')
      }else{
      console.log('hello ${member} thank you for logging in again')
      }
}
}

//question no.32
function checkUsernames(current_users: string[], new_users: string[]): void {
    for (let new_user of new_users) {
        const isDuplicate = current_users.some((username) => username.toLowerCase() === new_user.toLowerCase())
        if (isDuplicate) {
            console.log(`The username '${new_user}' is already taken. Please enter a new username.`)
        } else {
            console.log(`The username '${new_user}' is available.`)
        }
    }
}
const current_users: string[] = ["gAnjiswag", "admin", "shinchan", "doraemon", "alexbhatti"]
const new_users: string[] = ["dr.jhatka", "gAnjiswag", "admin", "kalluShapatr", "babaFranklin"]

checkUsernames(current_users, new_users);

//question no.33
let numbers = [ 1 , 2, 3, 4, 5, 6, 7,8,9]
for(let number in numbers){
   if(number === '1'){
   console.log(number,'st')
   }else if(number === '2'){
   console.log(number,'nd')
   }else if(number === '3') {
   console.log(number, 'rd')
   }else{
   console.log(number, 'th')
   }
}


//question no. 34

let pizzas = ['pineapple', 'cheese','pepperoni']
for (let pizza of pizzas){
    console.log(`i like ${pizza} pizza`)
}

console.log(`i love pizza so much like its my life.and i wish i had a pizza castle..`)
console.log(`like its more than life its delightly flavour satisfies my heart like a melody..`) //stop forcing us to say these things i love biryani 
console.log(`thats the most delicious thing i have ever eaten..`)
console.log(`i really love pizza `)


//question no 35

let animals = ['panda','polar bear','grizzly bear']
for (let animal of animals ){
    console.log(`a ${animal} will make a good pet`)
}

console.log(` these animals have one thing in common which is it's cuteness`)
console.log(`and any of these animal will be a good pet`)

//question no. 36
function make_shirts(size:string , text:string){
    console.log(`you ordered a ${size} shirt,with the text ${text}`)
}
make_shirts('XL','aryan')

//question no. 37
function makeShirts(sizeShirt : string= 'large', textShirt:string = ' i love typescript'){
    console.log(`you ordered a ${sizeShirt} shirt,with the text ${textShirt}`)
}
makeShirts()
function MakeShirt(SizeShirt:string='medium', TextShirt:string= 'i love typescipt' ){
    console.log(`you ordered a ${SizeShirt} shirt,with the text ${TextShirt}`)
}
makeShirts()
makeShirts('small', 'Aryan')

//question no. 38
function describe_city(city:string, country:string = 'pakistan'){
    console.log(`${city} is in ${country}`)
}
describe_city('karachi')
describe_city('tokyo','japan')
describe_city('hyderabad')

//question no.39
function city_country(City :string , Country :string){
    return(`${City} , ${Country}`)
}
let a = city_country('karachi', 'pakistan')
let b = city_country('lahore','pakistan')
let c = city_country('tokyo','japan')
console.log(a)
console.log(b)
console.log(c)