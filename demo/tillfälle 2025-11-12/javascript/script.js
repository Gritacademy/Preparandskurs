let foo = 5
let bar = 'tjenare'

//datatyper

let x

// number
x = 6     // heltal , integer / int  , Long 
x = 0.2    // decimatal , float / 0.1f , Double  

//string
x = '@'       // karaktär , character / char  
x = "hejsan"  // Sträng , String / str 
x = `he
jsa
n`  // rad bryter

// boolean
x = false      // boolean , boolean (true/false)

//undefined
x = undefined // odefinerat,undefined

console.log(typeof false);



// konkatination / concatination
// String + String = String
// "hej" + "san"  = "hejsan"

// String + number = String
// "hej"  + 1      = "hej1"

// String + boolean = String
// "hej"  + true    = "hejtrue"

// String + undefined = String
// "hej"  + undefined = "hejundefined"


//Kalkylation / calculation
// number + number = number
// 1      +  1     =  2 

// number + boolean =  number
// 1      +  true  =  2 

// number + undefined =  number
// 1      +  undefined  =  NaN   //not a number 


//boolean + boolean = number
// true   +  true   = 2


// 3) if satser
// condition koder ger ut boolean värden
//  1 == 1   jämnförelse vänster vs höger
//  2 > 1    större än 
//  2 >= 2   större än eller likamed
//  2 < 1    mindre än 
//  2 <= 2   mindre än eller likamed
//  1 === 1  jämnför värdet + datatypen 
//  1 != 1   inte likamed   !true är false ,  !false är true

let age = document.getElementById("ageInput").valueAsNumber 
if ( age >= 18 ) {
    console.warn("du är vuxen");  // sanna kod
    console.warn("YES!!!!!!!!!!");  // sanna kod
    console.warn("YES!!!!!!!!!!");  // sanna kod
}  else {
    console.warn("du är ett barn"); // falskt
    console.warn("NOOOOO   !!!!!!!!!!"); // falskt
    console.warn("NOOOOO   !!!!!!!!!!"); // falskt
    console.warn("NOOOOO   !!!!!!!!!!"); // falskt
}





