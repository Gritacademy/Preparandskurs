// 2) datatyper

let x;
//string
x = 'hejsan'; // string str, sträng/text
x = '#'; // character char , karaktär/tecken

// number
x = -5; // integer  long, heltal
x = 0.5; // float double , decimaltal

//boolean
x = false; //boolean , boolean

console.log(typeof 5);

// String + String = String // konkatination
// String + number = String // konkatination
// String + boolean = String // konkatination

// number + number = number //kalkylation
// number + boolean = number //kalkylation

// boolean + boolean = number //kalkylation

// 4) if satser
// alla conditions ger booleans true/false
// ==  jämnför värdet
// ===  jämnför värdet + datatypen
// < mindre än
// > större än
// <= mindre än eller lika med
// >= större än eller lika med
// != inte lika med
let age = 18; // Alriks ålder
let vip = true; // klubb status

//1 ) if satser i en serie rad
/*
if  ( age >= 18 ) {
    console.log("Du är vuxen");
} else {
    console.log("du är ett barn");
} 


if  ( vip == true ) {
    console.log("Du är en kändis");
} else {
    console.log("du är en vanlig person");
} 
*/

// 2) om sant så kör vi nästa if sats
/*
if  ( age >= 18 ) {
    console.log("Du är vuxen");
    if  ( vip == true ) {
        console.log("Du är en kändis");
    } else {
        console.log("du är en vanlig person");
    } 
} else {
    console.log("du är ett barn");
} 
*/

// 3) om false så kör vi nästa if sats
/* if (age >= 18) {
    console.log('Du är vuxen');
} else {
    console.log('du är ett barn');
    if (vip == true) {
        console.log('Du är en kändis');
    } else {
        console.log('du är en vanlig person');
    }
}

// förenkling 

if (age >= 18) {
    console.log('Du är vuxen');
} else if (vip == true) {
    console.log('Du är en kändis');
} else {
    console.log('du är en vanlig person');
} */

// 4) 2 regler/ conditions i en ifsats
// && and och  (båda måste vara true)
// || or eller (altGr = alt + ctrl)
if  ( age >= 18 && vip == true ) {
    console.log("SANT!!!");
} else {
    console.log("FALSKT!!!");
} 






console.log('vidare....');
