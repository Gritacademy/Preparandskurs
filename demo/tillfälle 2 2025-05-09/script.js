// let x // deklarera variabeln som heter x
// x = 5 // tilldelas med 5


// Datatyper 2)

let x; 
// number , hel tal + decimaltal
x = 5    //  integer , int , long : heltal
x = 0.2  //  float , 0.2f , double : decimaltal


// string
x = "alrik" // String, str : sträng text
x = '#'     // character , char : karaktär  

// boolean
x = true    // boolean, bool : boolean

let foo = 5

// KOMBINERA DATATYPER


// string + string = string // konkatineras
// "hej" + "san"  -> "hejsan"

// string + number = string // konkatineras
//  "hej" + 1  ->    "hej1"

// string + boolean = string //konkatineras
//  "hej" + true ->  "hejtrue"


 //number + number = number //kalkylation
 //   1 + 1 -> 2

 //number + boolean = number //kalkylation
//   1 + true ->2


 // boolean + boolean = number //kalkylation
 //  true + true -> 2






// if satser  // 

// condition
  2 == 2  // jämnför
  2 < 3  // mindre
  2 > 3  // större än
  2 <= 2 // mindre
  2 >= 3 // större än
  2 === 2 // jämnför + datatyper
  1 != 2 // inte samma
   
// struktur
let tal1 = 1
let tal2 = 5


if(  tal1 * tal2 > 5 )
{
    console.log("RÄTT");
    console.log("RÄTT");
}
else {
    console.log("FEL");
    console.log("FEL");
    console.log("FEL");
}


//leta upp baseat på taggens namn
//let inputDOM = document.getElementsByTagName("input")[0]

// leta upp taggen baserat på id
let buttonDom =  document.getElementById("btn")

buttonDom.addEventListener( "click", ()=> {
    let inputDOM = document.getElementById("nameInput")
    if(inputDOM.value == 4){
        console.log("det är nummer 4!!!");
        alert("det är nummer 4!!!")
    }else {
        console.log("det är inte 4...");
    }
    

} )
/*  input för olika typer  
document.getElementById("nameInput").checked
document.getElementById("nameInput").checked
document.getElementById("nameInput").value
document.getElementById("nameInput").valueAsNumber 
*/






