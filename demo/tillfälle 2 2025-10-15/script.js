//alert()

//Datatyper
// typeof  visar datatypen i string
let x;

// number
x = 5; // integer : int, long  , heltal
x = 0.2; // float: f , double: d , decimaltal

//string
x = "hejsan"; // string : str , sträng
x = "#"; // character : char , karaktär

//boolean
x = true; // boolean , boolean

//undefined
x = undefined;

// addition på dessa datatyper

//Konkatination, contatination (klistra ihop)
// String + String =>  String
//  "hej" + "san"  =>  "hejsan"

// String + Number =>  String
// "hej"  + 1      =>  "hej1"

// String + boolean =>  String
// "hej"  + true    =>  "hejtrue"

// String + undefined =>  String
// "hej"  + undefined =>  "hejundefined"

//Kalkylation, calculation
//Number + Number => Number
// 1     +  1     =>  2

//Number + Boolean => Number
// 1     + true    => 2

//Number + undefined => Number
// 1     + undefined => NaN

//Boolean + Boolean => Number
//true    + true    => 2

// conditions
// ger ut en boolean

// ==  jämnför
// >  större än
// <  mindre än
// >= större än eller likamed
// <= mindre än eller likamed
// === jämnför värdet & datatypen
// !=  inte lika med


// &&  and , och    true om  båda är sant
// ||  or , eller   true om något av sidorn är sanna


/* 
if ( true ) {
    console.log("YES");
    console.log("YES");
    console.log("YES");
    console.log("YES");
    console.log("YES");
} else {
    console.log("NO");
    console.log("NO");
    console.log("NO");
    console.log("NO");
} */
//        index.html 
//         letaup baserat på en object med id "rangeInput" 
//          ta dess värde  
let age = document.getElementById("rangeInput").valueAsNumber
let vip = false // Very Important Person
let h1DOM = document.getElementById("rubrik")
let checkDOM = document.getElementById("checkBoxInput").checked  //sant/false

h1DOM.textContent = age

// ändra backgrundsfärg
//document.body.style.backgroundColor="red" 

if (age >= 18) {
  console.log("du är vuxen");
} else {
  console.log("du är ett barn");
}


if (vip == true) {
  console.log("du är stammis");
} else {
  console.log("du är en vanlig kund");
}

if(age >= 18 && vip == true){
  console.log("YES");
} else {
  console.log("NO");
}

