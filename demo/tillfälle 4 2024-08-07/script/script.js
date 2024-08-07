let list = ['Alrik', 'Leon', 'Reebar', 'Sheroq']
let plusBtn = document.getElementsByTagName('button')[10]
//plusBtn.addEventListener("click", () => addition())
//plusBtn.onclick = () => addition()
let firstNumber = 0
list.pop()
// function
let foo = 5 // deklarara en variabeln foo

const PI = 3.141592

function alrik() {
    // definera en funktion som heter alrik
    console.log('hej')
}

//document.write(555)
//alert(123) // makes a alertbox/popup box
alrik() // kalla /anropa funktionen alrik , call the function alrik

//            (parameter)
function addition(tal1 = 1, tal2 = 1) {
    //tal += 1
    //let foo = 10

    return tal1 + tal2
}
Math.random()

function number(tal) {
    //if(firstNumber==undefined)
    firstNumber += '' + tal
    console.log(firstNumber)
    console.log(Number.parseInt(firstNumber))
}

// 7 object

let bar = 1000000
bar = 2000000

//index       0          1      2       3                 4
let array = [1000000, 'Alrik', 'red', 'stenyxegatan 5b', true]
array[0] = 2000000

// properties  key : value
let hus1 = {
    price: 1000000,
    owner: 'Alrik',
    color: 'red',
    adress: 'stenyxegatan 5b',
    sold: true,
    queue: list,
    nextHouse: {  price: 1000000,
        owner: 'Bianca',
        color: 'red',
        adress: 'stenyxegatan 5c', },
    sell: function (newOwner) { // method
        console.log("the house is sold to:" + newOwner)
        hus1.owner = newOwner
    }
}

function sell (newOwner) { // function
    console.log("the house is sold to:" + newOwner)
    hus1.owner = newOwner
}


hus1.price = 2000000
/*Math.PI 
console.log()
document.write() */

document.title= 2000000

console.log()  // method is an function inside an object
//hus1["price"] = 2000000   // optional way js
