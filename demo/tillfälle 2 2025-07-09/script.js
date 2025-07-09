// 2) datatyper

let x

// undefined
x = undefined

// number
x = 5 // heltal  , integer, long : int , l
x = 0.5 // decimatal, float , double : f , d

// string

x = '#' // karaktär /charater : char
x = 'hej!!' // Sträng , String : Str

// boolean
x = false //boolean, boolean : bool

// String : konkatination

// String + String -> String
// "hej" + "san" ->  "hejsan"

// String + number -> String
// "hej" + 1 ->   "hej1"

// String + boolean -> String
// "hej" + true -> "hejtrue"

// String + undefined -> String
// "hej" + undefined -> "hejundefined"

//Number : kalkylation

// number + number -> number
// 1 + 1 -> 2

// number + boolean -> number
// 1 + true  -> 2

// number + undefined -> number
// 1 + undefined -> NaN

// boolean : kalkylation
// boolean + boolean -> number
// true + true -> 2

// 3) if satser

//conditions get ut booleans true/false
// 1+1 == 2 är båda sidorna samma värde
// 1 > 2  större än
// 1 < 2  mindre än
// 1 >= 1 större eller lika med
// 1 <= 1 mindre eller lika med
// 1 != 1 inte lika med
// 1 === 1 är båda sidorna samma värde + datatyp

/*
let age = 12
if(  age >= 20 ){
    console.log("välkommen till systembolaget")
    console.log("välkommen till systembolaget")
}
else {
    console.log("under 20 så du får ej köp på systemet");

    if(age >= 18) 
        console.log("du får jobba på systemet dock"); //statement
    else 
        console.log("du får ej jobba på systemet heller");
        

}*/

/*

let points = 0

if(  1+1 == 2 ) {
    console.log("Rätt");
    points = points + 1
}
else
    console.log("fel");


if(  2*2 == 4 ) {
    console.log("Rätt");
    points = points + 1
}
else
    console.log("fel");

*/

/*
let onGrit = true
let onJava = false

if ( onGrit == true ){
    console.log( "yes1");

    if (  onJava == true  ){
        console.log( "yes2");
    }else {
        console.log( "no2");
    }


}else {
    console.log( "no1");
}
*/
/*
let cyklaLagligt = false
let harBelysning = false

if (cyklaLagligt == true) {
    console.log('laglig cykling')
} else {
    console.log('olaglig cykling')

    if (harBelysning == true) {
        console.log('har belysning bra gå vidare')
    } else {
        console.log('har ej belysning på natten, böter 800kr')
    }

}*/


let height = 160
let rideSickness = false


if (height > 150 && rideSickness == false)
    console.log("you can ride this roller coaster");
else 
    console.log("NO you cant ride this attraction");
    




console.log('vidare...')
