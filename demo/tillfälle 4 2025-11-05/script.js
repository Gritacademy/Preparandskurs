// "hej"   sant
//  ""     false

//  1   sant
//  0    false

//undefined  false

// 6) funktioner

// gul färg & parentess efter namn

let defaultColor = "RED";
console.log(defaultColor); // loggar programmet

alrik(); // kalla/anropa/invokera  på funktionen

// function är hoisted och kan kallas förre den ha skapats
function alrik(foo, bar) {
    // definera funktion alrik
    foo += "!?";
    // öka med 1
    //alert(123)        // pausar programmet
    console.log(foo); // loggar programmet
    console.log(bar); // loggar programmet
}

for (let i = 0; i < 3; i++) {
    break; // avslutar loopar
    console.log(i, "loop");
}

// lägg in värden
// på funktionens parentesss kan man lägga in värden(  parameter )

function addition(tal1, tal2) {
    return tal1 + tal2; // avslutar funktionen
    console.log(tal1 + tal2);
}

// returnera ut värden
//alert()  //return void= undefined
Math.random(); // return number
let array = ["hej", 1];
array.pop(); // return number eller string eller undefined

// 7)  Object

let y = 1000000;
y = 2000000

//  index    0        1       2       3          4       5
let hus = [1000000, true, "villa", "yxgatan 5b", "red", "Ellen", "Jonna"];
hus[0] = 2000000

//  properties  key:value pair
let house = {
    price: 1000000,
    sold: true,
    type: "villa",
    adress: "yxgatan 5b",
    color: "red",
    owner: "Ellen",
    buyer: "Jonna",
    lista: ["Alrik","Sandra"],
    sold:function () {
        house.owner = house.buyer
        house.buyer= undefined
        console.log("the new onwer is " + house.buyer );
    }
};

house.price = 2000000
house["price"] = 3000000  // alternativt

let array2 = [   1,2,3,4,5  ,  ["Alrik","Sandra"] ,true ,   ]
let x = 5

x
console.log()  // punkten är ett sätt att identifiera object
Math.random()  //  metoder är på object
document.title
Date.now()

//alert()   // function är standalone

// skapa metoder 

let alriksConsole = {
    author : "Alrik He",
    date: Date.now(),

    log: function ( text ) {
        console.log( text );
    }

}


