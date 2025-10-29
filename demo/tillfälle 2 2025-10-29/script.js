let foo = "hej"
document.write("hej" + "hejsan")

document.write(1 + 1)

console.log( 1 + "hej"  )

console.log( (2 + 3) * 4 );

console.log( 1 + 1 +"hej"  ); // "2hej"
console.log( "hej" + (1 + 1)  );


//P arentess  ()
//E xponent  Math.exp(2)
//M ultiplikation *
//D ivition /
//A ddition +
//S ubtraktion -



//2) Datatyper

let x 
//number
x = -5       // heltal , integer, int , long , L
x = 0.5     // decimaltal, float, f , double, D 

//String
x = '#'       // karaktär, character , char
x = "hejsan"  // Sträng , string , str 
/*x = `d ${x}   //string interpolering* backticks är överkurs 
sfs
df
sd`*/

//boolean       true -> 1  , false -> 0
x = true      // boolean , boolean, bool

//undefined
x = undefined // odefinerat, undefined



// String + String ->  String   //konkatinerar/concatination
//  "hej" + "san"  -> "hejsan"

// String + Number ->  String
//  "hej" +  1     ->  "hej1"

// String + boolean ->  String
//  "hej" +  true   ->  "hejtrue"

// String + undefined -> String
//  "hej" + undefined -> "hejundefined"


// Number + Number -> Number
//    1   +  1     -> 2

// Number + boolean -> Number
//    1   +  true   -> 2

// Number + Undefined -> Number
//    1   + undefined -> NaN (Not a Number)


// boolean + boolean -> Number
//  true   + true    -> 2

// conditions
// 1 + 1 == 2 // jämnför
// 2 > 1    // störrre än
// 2 < 1    // mindre än
// 2 >= 1   // störrre än eller likamed
// 2 <= 1   // mindre än eller likamed
// 1 === 1  // jämnför värdet & datatypen

//* true && true  och and
//*  true || false  eller or 
//club id kontroll program där man fyller i uppgifter

let age = 8
let vip = true  // Very Important Person
if( age >= 18 ){ 
    console.log("DU är vuxen")
} else {  
    console.log("DU är ett barn!!")
}


if( vip == true ){ 
    console.log("DU en kändis")
} else {  
    console.log("DU är normal människa")
}


if( age >= 18 && vip == true){ 
    console.log("YES")
} else {  
    console.log("NO")
}

/* 
document.getElementById("ageInput").valueAsNumber
document.getElementById("vipInput").checked
 */