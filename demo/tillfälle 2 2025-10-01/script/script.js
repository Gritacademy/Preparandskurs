//alert(123456789)


//variabler är en behållare

let angle = 90  // skapar en variabel som heter angle , den innehåller 90
console.log(angle)
angle = 45
console.log(angle)

let bok //skapar variabel bok
bok = "hejsan"
console.log(bok)
bok = "tjenare!!"
console.log(bok);


//bok = angle      // tilldelning, assign
// operatorer
bok = 1 + 1         // kalkylation
bok = "hej" + "san" // konkatination (klistrar)
bok = "hej" + 1     // konkatination
bok =  1 + "hej"   // konkatination
bok =  1 + 1 + "hej"   // konkatination
bok = "hej" + 1 + 1    // konkatination
// "hej" + 1 => "hej1"
// "hej1" + 1 => "hej11"

bok = 2 + 3 * 2
bok =   "hej" +  (1 + 1 )  // konkatination
console.log(bok);

// P arentess
// E xponent 
// M ultiplikation
// D ivition
// A ddition
// S ubtraktion

let high_score2 = 100



// 2) Datatyper

let x
// number (gröna)
x = 22   //  int/ integer / heltal  , long 
x = 0.5 //  f/ float / decimaltal , double 

console.log(typeof x);

// string (orange)
x = "hej&=?"  // str/ string / sträng
x = '#'       // char/ character / karaktär

console.log(typeof x);

//boolean (blå)
x = false  //  bool / boolean / boolean

console.log(typeof x);

x = undefined

console.log(typeof x);
// number + number => number
// 1 + 1 = 2>

// number + String => String
// 1 + "hej" => "1hej"

// String + String => String
// "hej" + "san" => "hejsan"

// boolean + String => String
// true + "hej" =>  "truehej"

// undefined + String => String
// undefined + "hej" =>"undefinedhej"

//boolean + number => number
// true + 1 => 2

//boolean + boolean => number
// false + false => 0


// 3a) conditions
console.clear()
// condition kod de ger boolean true/false 
// ==  är dem likadana 
// > större än
// < mindre än
// >= större än + likadant
// <= mindre än + likadant
// === är dem likadana + samma datatype

if( "hej" == "Hej" ){
    console.log("YESSS!!!!");
}

let age = 12
if( age >= 20 ){ // är vuxna ?
    console.log("vi är vuxen!!!!");
} else {
    console.log("barn ");
}