//1) variabler
let foo = 5; // deklarera & tilldelar variabeln foo med 5 // Nummer

let bar = "hejsan"; // TEXT

console.log(foo + bar);
console.log(1 + 1);
console.log("hej" + "san");
console.log("hej" + (1 + 1));
console.log(1 + 1 + "hej");

console.log((2 + 3) * 2);

//P arentess
//E xponent
//M ultiplikation
//D ivition
//A ddition
//S ubtraktion

// 2) datatyper

let x;

//number
x = -7; // integer/int,Long/L heltal
x = 1.25; // float/ 1.2f , Double / D  decimaltal

//string
x = "D"; //character/char
x = "hejsan23"; // String/str

//boolean
x = false; //boolean/bool   (true => 1 , false => 0)

//undefined
x = undefined; //undefined

let alrik;
console.log(typeof alrik);

//String + String =>  String     //konkatination,concatination
//"Hej"  + "san" => "Hejsan"

//String + number =>  String
//"Hej"  +  1     =>  "Hej1"

//String + boolean => String
//"Hej"  + true    => "Hejtrue"

//String + undefined => String
//"Hej"  + undefined => "Hejundefined"

//number + number =>  number   //kalkylerar/calculation
// 1     +  1     =>  2

//number + boolean => number
// 1     +  true  =>  2

//number + undefined => number
// 1     + undefined => NaN  //Not a Number

//Boolean + Boolean =>  Number //kalkylerar/calculation
//true    + true    =>  2

// if satser / vilkorsatser behöver booleans(true/false)

// Condition
// 1+1 == 2 jämnför
// 2 > 1  större än
// 3 < 2  mindre än
// 2 >= 2  större än eller likamed
// 2 <= 2  mindre än eller likamed
// 1 != 1  inte likamed
// 1 === 1 jämnför värdet + datatypen

//   &&   och båda måsta vara sanna för att allt är sant
//   ||   eller

//1)   if sats i en serie
let age = 10;
let vip = true; //Very Important Person
/*
if(  age >= 18  ) { // koder när det är sant
    console.log("YES 1");
}  else {  //koder för falskt
    console.log("NO 1...");
}

if (vip == true) {
        console.log("YES 2");
} else {
        console.log("NO 2...");
}*/

// 2 annan fråga om första är sant
/*
if(  age >= 18  ) { // koder när det är sant
    console.log("YES 1");

    if (vip == true) {
        console.log("YES 2");
    } else {
        console.log("NO 2...");
    }

}  else {  //koder för falskt
    console.log("NO 1...");
}*/



// 3 annan fråga om första är false
/*
if (age >= 18) {
    // koder när det är sant
    console.log("YES 1");
} else {
    //koder för falskt
    console.log("NO 1...");

    if (vip == true) {
        console.log("YES 2");
    } else {
        console.log("NO 2...");
    }
}

//förenklat (saknar en kod emellan else & andra if )
if (age >= 18) {
    console.log("YES 1");
} else if (vip == true) {
    console.log("YES 2");
} else {
    console.log("NO 2...");
}
*/


/*
//4) kombinerar reglerna i en ifsats

if(  age >= 18   ||   vip == true  )
{
    console.log("YES");
} else {
    console.log("NO...");
}
*/
