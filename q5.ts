//question no.40
interface ALBUM {
    artist:string
    title:string
    track?: Number
}

function make_album(artist :string, title:string, track? : Number):ALBUM{
    let album:ALBUM = {
        artist : artist.charAt(0).toLocaleUpperCase()+ artist.slice(1),
        title : title.charAt(0).toLocaleUpperCase()+ title.slice(1),
    }
    if(track !== undefined ){
        album.track = track
    }
    return album
}

let singer1 = make_album('weekend', 'popular')
let singer2 = make_album('atif aslam','tera hone lga hu')
let singer3 = make_album('arjeet singh','tum hi ho',14)

console.log(singer1)
console.log(singer2)
console.log(singer3)

//question no. 41
function magicBoys(...magic:Array<string | Number>):Array<string | Number > {
    return [...magic]
}

let m1 = magicBoys('Dr.aloo','DR.jhtka','prof.magic','engineer majikmajak')
let m2 = magicBoys('kaloo jadoogar')
console.log(m1)
console.log(m2)

//question no. 42
function make_great(...nameOfM:Array<string | number>){
    for(let i = nameOfM.length ; i>0; i--){
        console.log(`the great ${nameOfM[i]}`)
    }
}
make_great('Dr.aloo','DR.jhtka','prof.magic','engineer majikmajak','bob the magic')

//question no. 43
function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = []
    for (const magician of magicians) {
        greatMagicians.push("Great " + magician);
    }
    return greatMagicians
}

function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magicians: string[] = ['Dr.aloo','DR.jhtka','prof.magic','engineer majikmajak','bob the magic'];
const originalMagicians: string[] = [...magicians]
const greatMagicians: string[] = makeGreat([...magicians])
console.log("Original Magicians:")
showMagicians(originalMagicians)
console.log("Great Magicians:")
let ab = makeGreat(magicians)
console.log(ab)
//QUESTION NO. 44
function sandwiches(...order: Array<string>) {
    console.log('YOUR ORDERED FLAVOR: ')
    for (let sandwich of order){
    console.log([sandwich]);}
    let s = [console.log('you ordered a sandwitch with',...order,' flavour')];
    return s
    }
sandwiches('bbq')
sandwiches('cheese')
sandwiches('veg','pineapple')
//question no. 45
interface car{
    car_name :String
    model :String
    specification:String[];
}
function car_make(car_name:string, model:string,specification:Array<string>):car{
    return{
        car_name,
        model,
        specification
    }
}
console.log(car_make('NISSAN','GTR',['COLOR : RED','MAX. SPEED = 340KM/H']))



















export{}



























