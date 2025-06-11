//2) datatypes

let x //declare varaible x
let foo = false
// numbers
x = 5 // integer, int, long : heltal
x = -10.5 // float, f,  double : decimaltal

// string
x = 'bok' // String , str : Sträng / text
x = '?' // character, char : karaktär

// boolean
x = true // boolean bool : boolean'

// string + string = string
// "hej"  + "san"  = "hejsan"

// string + number = string
// "hej"  + 1      = hej1

// string + boolean = string
// "hej"  + true    = "hejtrue"

// string + undefined = string
// "hej" + undefined = "hejundefined"

// number + number  = number
//  1     +    1    =   2

// number + boolean = number
//  1     +  true   =  2

// boolean + boolean = number
//  true   +   true  = 2

// !   inte / not

//console.log(foo);
//console.log( typeof 99); // checkar datatyp
//console.log( typeof false);
//console.log( typeof "hej" );

//4) if satser

x = 10 // tilldela x med siffran 5

// conditions
1 + 1 == 2 // jämnför båda om det är samma värde (om det är det get vi sant)
1 === 1 // jämnför + samma datatyp
1 < 2 // mindre än
2 > 1 // större än
1 <= 2 // mindre än eller lika med
2 >= 1 // större än eller lika med
1 != 2 // inte likamed

//  &&    // och
//  ||   // eller

// struktur
//console.log(document.getElementById("ageInput").valueAsNumber );

document.getElementById("checkAge").addEventListener("click", () => { 

    let age = document.getElementById('ageInput').valueAsNumber

    if (age >= 20) {
        console.log('du är vuxen')
    } else {
        console.log('du är ett barn')
    }


})

function checkAge() {
    let age = document.getElementById('ageInput').valueAsNumber

    if (age >= 20) {
        console.log('du är vuxen')
    } else {
        console.log('du är ett barn')
    }
}

let age = document.getElementById('ageInput').valueAsNumber

if (age >= 20) {
    console.log('du är vuxen')
} else {
    console.log('du är ett barn')
}

console.log('vidare...')
 