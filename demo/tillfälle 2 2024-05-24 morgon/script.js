// datatyper

console.log(123)

let x
//string
x = 'hej' // str, String   /sträng,text
x = '%' // char, character / karaktär

//number
x = -5 // int, integer,byte,short,long/  heltal
x = 0.5 // f, float, double/  decimaltal

//boolean
x = false // bool, boolean / boolean

//string + string = string //konkatinerar
//string + number = string //konkatinerar
//string + boolean = string //konkatinerar

//number + number = number //kalkylation
//number + boolean = number //kalkylation

//boolean + boolean = number //kalkylation

//4) if satser
// conditions   ger booleans
//  == jämnför vänster med höger
//  === jämnför + datatypen
//  <  mindre än
//  >  större än
//  <=  mindre än
//  >=  mindre än
//  != inte likamed
!false
!true

let age = 5
let vip = true

/* 
if ( age >= 20 ) // alkohol ålder
    console.log("du kan köpa på systemet 1");
else  // falskt //optional
    console.log("du är för ung för att köpa systemet 1");

    
if(vip ==true)
    console.log("du är en kändis 2");
else 
    console.log("du är vanlig människa 2");
 */

//2)
if (age >= 20) {
    // alkohol ålder
    console.log('du kan köpa på systemet 1')
    if (vip == true) console.log('du är en kändis 2')
    else console.log('du är vanlig människa 2')
} else {
    // falskt //optional
    console.log('du är för ung för att köpa systemet 1')
}

//3)
if (age >= 20) {
    // alkohol ålder
    console.log('du kan köpa på systemet 1')
} else {
    // falskt //optional
    console.log('du är för ung för att köpa systemet 1')
    if (vip == true) {
        console.log('du är en kändis 2')
    } else {
        console.log('du är vanlig människa 2')
    }
}

// förkortning
if (age >= 20) 
    console.log('du kan köpa på systemet 1')
else if (vip == true) 
    console.log('du är en kändis 2')
else 
    console.log('du är vanlig människa 2')



//4)
// && och and
// || eller or

if(age >= 20 && vip == true)
    console.log("sant")
else
    console.log("false")



