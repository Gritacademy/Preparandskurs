// 6 funktioner

//          ( parameter,parametrar )
function addition(tal1, tal2) {
    //definera funktionen addition
    console.log(tal1 + tal2)

    return tal1 + tal2
}

addition() //anropa funktionen addition

//alert(123) //funktion den är gul , hovra

let queue = ['Albin', 'Elina', 'Rabia']

function changeFirstInQueue(nyttNamn) {
    hus.shift() // tarbort Albin
    hus.unshift(nyttNamn) // lägger till nyttNamn
}

// 7 Object

const x = 1500000
//x = 2000000
//           0        1          2       3      4
let hus = [1500000, 'våning4', 'Elina', true, 'yxgatan 5b']
hus[0] = 2000000
//changeFirstInQueue(2000000)

let hus1 = {
    price: 1500000,
    floor: 'våning4',
    owner: 'Elina',
    sold: true,
    adress: 'yxgatan 5b',
    queue: ['Albin', 'Elina', { price:500,color:"red" }],
    sell:function (newOwner) {
        console.log(newOwner +" is the new owner")
        hus1.owner = newOwner
    }
}



hus1.price = 2000000
//hus1.queue[2] = "alrik"
hus1.queue[2].price = 1000
console.log() // metod
//alert()       // function

// . object med punkt