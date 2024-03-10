//question no. 13
let cars = ['ROLLS ROYCE PHANTOM','KAWASAKI NINJA', 'McLaren P1']
console.log(`i would like to own a ${cars[0]}`)
console.log(`iNSHALLAH I'LL BUY A ${cars[2]} `)
console.log(`i would love to have ${cars[1]}`)

//question 14
let guest = ['shayan', 'aliyan', 'hassan'] 
let invitation = " I HOPE YOU ARE DOING WELL AND EID-MUBARAK, AS YOU KNOW THAT TOMMOROW IS THIRD EID AND I WOULD LIKE TO INVITE YOU AND YOUR FAMILY TO ENJOY THE MOMENTS OF OUR LIFE , I WOULD BE HAPPY TO SEE YOU AT DINNER . YOUR FRIEND, ARYAN"
for(let g of guest){
    console.log(`ASALAMUALAIKUM ${g.toLocaleUpperCase()}, ${invitation}`)
}

//question 15
console.log(guest[2]," can't attend the dinner")
guest[2] = 'raiyan'
let newGuest = guest[2]
console.log(` ASALAMUALAIKUM ${newGuest}, ${invitation}`)

//question no. 16 
let informMsg = ` i have found a bigger dinner table`
for(let gue of guest){
console.log('hey',gue,informMsg)
}

guest.unshift('Raziq')
guest.splice(2,0, 'ahmed')
guest.push('huzaifa')
for (const gues of guest) {
    console.log(gues)
console.log(`ASSALAMUALAIKUM!, HEY ${gues} I JUST GOT A NEW BIGGER DINNER TABLE I WOULD LIKE TO INVITE YOU AT MY HOME FOR A DINNER TONIGHT`)
}


//question 17
console.log('SORRY,I CAN ONLY INVITE TWO PEOPLES FOR DINNER')
while(guest.length > 2){
    let remov = guest.pop()
    console.log(`i am sorry ${remov}`)
}
console.log(`you are still invited ${guest.join(' and ').toLocaleUpperCase()}`)

guest.pop()
guest.shift()
console.log(guest)

//question 18
let Place = ['makkah', 'madinah','japan','palestine','laughtale']
console.log('originial order : ', Place)
console.log('alphabetical : ',[...Place].sort().join(' , '))
console.log('original : ',Place)
console.log('reverse alphabetical : ',[...Place].sort().reverse().join(' , '))
console.log('original order : ', Place)
Place.reverse()
console.log('reverse :',Place)
Place.reverse()
console.log('again reverse : ',Place)
Place.sort()
console.log('sort : '+ Place)
Place.reverse()
console.log('reverse alphabetical : ', Place)


//question no. 19
let invitedGuest = [ 'Raziq' , 'shayan']
let numberOfGuest =  invitedGuest.length
console.log('i invited ' , numberOfGuest , ' guests.')

//question no. 20
let places = ['Mt.k2 pakistan', 'tokyo tower - japan',
'makkah - Saudia Arabia', 'Mt. fuji - japan']
console.log('places around the world'.toLocaleUpperCase())

for(let place of places ){
console.log(place)
}















export{}