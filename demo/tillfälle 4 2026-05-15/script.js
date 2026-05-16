//

console.log(foo)
var foo = 5

if (true) {
    {
    }
}

//
let i = 0
while (true) {
    console.log(i)
    i++
    if (i == 5) break
}

console.log(i)

for (let i = 0; i < 5; i++) {}

//funktioner 6)

let x = 0
let y
function alrik(x) {
    //definera en funktion som heter alrik

    console.log(x + " HEJSAN!!")
}

alrik(true) //anropa,kalla,invokera på funktionen alrik

//parameter heter dem i parentessen
function addition(tal1, tal2) {
    document.writeln(tal1 + tal2)
    return tal1 + tal2 //returnerar siffror
}

//alert() //retunerar undefined pga :void

Math.random() //retunerar number pga : number

let array = [10, true, "hejsan"]
array.pop()

document.getElementsByTagName("button")[2].innerHTML = "TEST"
document.getElementsByTagName("button")[2].onclick = function hedda(tal1) {
    console.log("HEDDA ÄR COOL!!" + tal1)
}

document.getElementsByTagName("button")[2].onclick = () => {
    addition(2, 2)
}

//object 7)

let a = 10
a = 20

// index      0
let lista = [10, "hej", true]
lista[0] = 20
let queue = ["Alrik","Hedda","Filip","Christina"]
let house= {
    color:"red",
    price:1000000
}
// properties  key value pair  key:value
let obj = {
    pris: 10,
    greeting: "hej",
    happy: true,
    queue: queue,
    hus: house,
    log: log

}

function log (message) {
    console.log(message);
}

/* alrik() //function
alert() //function standalone
Math.round() //metod
array.push() //metod
document.getElementById() //metod
console.log() //metod */


obj.pris = 20
