let foo = 0

if (true) {
    console.log("YES")
} else {
    console.log("NO")
}

// funktion 6)

function myFuction() {
    //definera en fuktion som heter myFunction

    console.log("HEJSAN")
    let foo = 5
    //alert(foo)
}

myFuction() //anropa/kalla/invokera   myFuction

let tal1 = 1
let tal2 = 1

//document.getElementById("plus").onclick = addition
document.getElementById("plus").addEventListener("click", addition)
document.getElementById("minus").addEventListener("click", subtraction)

addition(123) //hoistas

//(parametrar) heter dem i parentessen
function subtraction() {
    console.log(tal1 - tal2)
}

let alrik
function addition(tal1, tal2) {
    if (typeof tal1 != "number" || typeof tal2 != "number") {
        return
        console.error("you need a number here!!")
    }

    //console.log(tal1 + tal2)
    return tal1 + tal2
}

function alriksRound(tal) {
    if (typeof tal1 != "number")
        return console.error("you need a number here!!")

    if (tal > 0.5) return 1
    else return 0
}

//alert()

while (true) {
    break
    console.log("loop!!!")
}

console.log(foo)

//Object

let y = 5000000
y = 6000000
console.log(y)

//  index      0         1          2       3       4         5
let array = [5000000, "yxgatan 5b", false, "Celia", "Philip", "radhus"]
array[0] = 6000000
array[6] = true
console.log(array)

//properties   key/value key value pair
let hus1 = {
    pris: 5000000,
    adress: "yxgatan 5b",
    sold: false,
    owner: "Celia",
    buyer: "Philip",
    type: "radhus", 
    sell: function() {
        console.log(hus1.owner + " sold the "+ hus1.type +" to: " + hus1.buyer+ " for the price of:" +hus1.pris + "kr")
        hus1.owner=hus1.buyer
        hus1.buyer=undefined
        hus1.sold=true
    }
}

hus1.pris = 6000000
hus1.harHiss = true
hus1["queue"] = ["Alrik","Mostafa","Helena"] //secondärt
//let keyword= "pris"
//hus1["pris"] = 7000000

hus1.pris = 8000000



alert()                         //function
addition(1, 1)                  //function
array.push(123)                 // metod
console.log(hus1)               // metod
document.getElementById("...")  // metod
Math.round(0.5)                 // metod
