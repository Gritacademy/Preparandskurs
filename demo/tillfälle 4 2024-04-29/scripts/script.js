// funktioner
/* console.log(foo);
let foo = 5 */

//hojstad
addition() // anropar/kallar på funktionen addition
//alert() // funktion
//console.log() // metod

// tal1 är en parameter
/* function addition( tal1 ){ // definera addition funktionen
    let x = "hej"
    console.log(12345678 + x + tal1)
} */
function addition(tal1, tal2) {
    // definera addition funktionen
    if (typeof tal1 != 'number' || typeof tal2 != 'number') return // avslutar funktionen
    console.log(tal1 + tal2)
    //return tal1+ tal2
}

function subtraction(tal1, tal2) {
    console.log(tal1 - tal2)
    return 888 // avslutar alla funktioner
}

function formula() {
    // meaning of life
    return 42
}

let x = 0

while (x < 10) {
    if (x == 5) break // avslutar alla loopar
    console.log(x)
    x++
}

// 7) Object

let bar = 2000000
bar = 5000000

// index      0         1      2      3
let lista = [2000000, 'red', 'yxgatan 5', false]
lista[0]= 5000000

let hus = {
    price: 2000000, // property (key value pair)
    color: 'red',
    adress: 'yxgatan 5',
    sold: false,
    sell: function () {
        console.log("the house is sold");
        this.sold=true
    }
}
hus.price= 5000000

function sell() {
    console.log("the house is sold");
    hus.sold=true
}



let alriksConsole = {
    log:function (data) {
        console.log(data)
    }
}




/* 
typeof console
"object"
typeof document
"object"
typeof hus
"object"  
*/

//console.log(bar,lista,hus);
console.log(bar);
console.log(lista);
console.log(hus);




{ //block
    const alrik = 32 
    var valentin = 50

    console.log(valentin);
    console.log(alrik);
    {
        console.log(valentin);
        console.log(alrik);

    }
   
}

console.log(valentin);
console.log(alrik);