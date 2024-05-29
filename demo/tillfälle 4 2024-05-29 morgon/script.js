// 6) functions
let foo = 5
const BAR = 5 // endast läsa

let input1 = document.getElementById('tal1')
let input2 = document.getElementById('tal2')
let plusBtn = document.getElementsByTagName('button')[0]
let resultat = document.getElementsByTagName('h5')[0]

plusBtn.addEventListener('click', () => addition(input1.valueAsNumber, input2.valueAsNumber)) // lägger till onclick på +

function subtracktion(tal1, tal2) {
    if (typeof tal1 == 'string' || typeof tal2 == 'string') return console.warn('input a number please!!!')

    let sum = tal1 - tal2
    console.log(sum)
    resultat.innerText = sum
}

// det som finns i parerntessen ( para ) heter parameter
function addition(tal1, tal2) {
    //skapa/definera funktionen addition
    if (typeof tal1 == 'string' || typeof tal2 == 'string') return console.warn('input a number please!!!')
    let sum = tal1 + tal2
    console.log(sum)
    resultat.innerText = sum
    return
    console.log(sum)
}

for (let count = 0; count < 10; count++) {
    console.log('for ' + count)
    if (count == 5) break
}

function skickaTillbaka() {
    return 'hej'
}
//alert() funktion
skickaTillbaka() // funktion

console.log() // metod

let lista = ['alrik', 'Rebecca', 'Niklas', 'Lukas']
lista.push(['hej', 'hej11'])
console.log(123, '123', true)
//addition() // kör/anropa call funktionen addition

// 7) Object

// variabel
let x = 1000000
x = 2000000

// array
let hus = [1000000, 'red', 2, 'yxgatan 5', true]
hus[0] = 2000000
hus[5] = 'Alrik He'
// object
//key : value pair
let house = {
    title: 'tillfälle 5',
    price: 1000000,
    color: 'red',
    floor: 2,
    adress: 'yxgatan 5',
    sold: true,
    owner: "Julia B",
    sell:function (newOwner ) {
        house.owner= newOwner
    }

}



house.price = 2000000
house['price'] = 2000000
house['buyer'] = 'Alrik He'
house.queue = ['Rebecca', 'Anna', 'Niklas', 'Lukas']

console.log(hus)
console.log(house)
