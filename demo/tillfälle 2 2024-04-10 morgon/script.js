//2) datatyper

let x;
// number
x = 5; // integer long, heltal
x = 0.5; // float double, decimaltal

// string
x = 'hej2'; // string str, sträng text
x = '#'; // character char, karaktär

// boolean
x = true; // boolean , boolean

// object
x = { namn: 'alrik' }; // object , objekt

// Dominant
// String + String -> String // konkatineras
// String + number ->  String // konkatineras
// String + boolean ->  String // konkatineras

// number + number -> number // kalkylerar
// number + boolean -> number // kalkylerar

// sub
// boolean + boolean -> number // kalkylerar false = 0 , true = 1

console.log(typeof 5); //printar ut "number"

// 4) if satser
// condition , regler som ger booleans
// true eller false
//  ! means not , ! betyder inte

// == jämnför
// === jämnför värdet & datatypen
// < mindre än
// > större än
// <= mindre än eller lika med
// >= större än eller lika med
// != inte lika med
let age = 50;
let vip = false;
//1) if satser efter varandra
/*if ( age >= 18 ){ // true
    console.log("vuxen");
} else { // false
    console.log("barn");
}

if ( vip  ==  true ){ // true
    console.log("du är en kändis");
} else { // false
    console.log("du är en vanlig människa");
}*/

//2) om den första är sant kör nästa if sats
/*
if ( age >= 18 ){ // true
    console.log("vuxen");
    if ( vip  ==  true ){ // true
        console.log("du är en kändis");
    } else { // false
        console.log("du är en vanlig människa");
    }
} else { // false
    console.log("barn");
}*/

//3) om den första är false kör nästa if sats

/*if (age >= 18) {
    // true
    console.log('vuxen');
} else {
    // false
    console.log('barn');
    if (vip == true) {
        // true
        console.log('du är en kändis');
    } else {
        // false
        console.log('du är en vanlig människa');
    }
}

// förenkling
if (age >= 18) 
    console.log('vuxen');
else if (vip == true) 
    console.log('du är en kändis');
else 
    console.log('du är en vanlig människa');
*/

//4)båda conditions i en ifsats
// && and och
// || or eller 
if (age >= 18 && vip == true) {
    // true
    console.log('true!!!');
} else {
    // false
    console.log('false!!!');
}



console.log('vidare...');
