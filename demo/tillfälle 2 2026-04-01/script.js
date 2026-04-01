let foo = "!!!!!";
let bar = "?????";
//console.log("hejsan jag heter alrik" + foo)

console.log(foo + bar);

// P arentess
// E xponent
// M ultiplikation
// D ivition
// A ddition
// S ubstraktion




// 2) datattyper

let x //skapar en variabel
let x2  // default värde i variabeln är undefined
// number
x = 3    // integer: int , heltal
x = 0.5  // float: f, decimaltal  (punkt för decimal tecken)

// string  (i js är ' "  samma)
x = '#'   // character:char, karaktär
x = "hej" // string:str, sträng

// boolean
x = true  //boolean:bool , boolean

x = undefined  // undefined,odefinerat


console.log(typeof 5)

//string + string = string  // concatination,konkatination
// "hej" + "hej" = "hejhej"

//string + number = string
// "hej" +   1   =  "hej1"

//string + boolean  = string
// "hej" + true = "hejtrue"

//string + undefined = string
// "hej" + undefined = "hejundefined"


//number + number = number  // calculation, kalkylation 
//  1    +   1   =  2

//number + boolean = number
//  1    + true   =  2

// number + undefined = number
//  1    + undefined = NaN



// boolean + boolean = number
// true + true  =  2

// boolean + undefined = number
// true+ undefined =  NaN 


// 3) condition & ifsatser
//  ==   jämnför t.ex:   1 + 1 == 2 
//  2*2 == 2+2
//     8 == 8
//   "hej" == "hej"
// "hejsan" == "hej" + "san"
//   "Hej" == "hej"


// <  mindre än t.ex   age < 18
// >  större än t.ex    55> 5
// 55 > 55

// <=  minder än eller lika med
// >=  större än eller lika med

// === jämnför värdet + datatypen

// !   not: inte
// !=  inte likamed 1 != "hej" 

//document.writeln("hej")

let age = document.getElementById("ageInput").valueAsNumber
//if kan välja att köra koden elelr inte
// ( sant/ false) baserat på det så kör den koden efteråt

if( age >= 20 ){  //system
    alert("där är vuxen nog för systemet !!! :) ")
} else {
   alert("du är ett barn ")
}