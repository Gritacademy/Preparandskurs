//alert('hejsan')

// Datatyper


let foo;

// number
foo = 5     // integer , heltal
foo = 0.5   // float , decimaltal
foo = NaN //tekniskt sätt number js

// string
foo = "hej"   //String (str), Sträng
foo = '#'    //character (char), karatär
foo = `hej  //rad brytning är med backtick
san`

// boolean
foo = true  // boolean (on/off) , boolean

// undefined
foo = undefined  // tomt

//object
foo = []
foo = {}

typeof 3

//interaction addition , datatype

// String + String = String //concatnation, konkatination  
// String + number = String //concatnation, konkatination  
// String + boolean = String //concatnation, konkatination  

// Number + Number = Number //calcylation, kalkylation
// Number + boolean = Number //calcylation, kalkylation

// boolean + boolean = Number //calcylation, kalkylation



// 4) if satser
// condition koder i ()
// == likamed 
// < mindre än
// > större än
// <= mindre än
// >= större än
// != inte likamed
// == likamed  & samma datatyp

/* if (  1 + 1 == 2   ) { //sant kod
    console.log("TRUE !!!!!");
} 
else { //false kod
    console.log("FALSE!!!!");
}
 */


let age = 2
let vip = true
// 1) if satser efter varandra
/* if(age >= 18){
    console.log("du är vuxen");
}else{
    console.log("du är ett barn");
}


if(vip == true){
    console.log("du är en very important person ");
}else{
    console.log("du är regular person");
} */

// 2) vid sant kör nästa if sats

/* if(age >= 18){
    console.log("du är vuxen 1");
    if(vip == true){
        console.log("du är en very important person ");
    }else{
        console.log("du är regular person");
    } 
}else{
    console.log("du är ett barn 1");
}   */





// 2) vid falskt kör nästa if sats
/* 
if(age >= 18){
    console.log("du är vuxen");
}else{
    console.log("du är ett barn");
    if(vip == true){
        console.log("du är en very important person ");
    }else{
        console.log("du är regular person");
    } 
}

// förenkling
if(age >= 18){
    console.log("du är vuxen");
}else if(vip == true){
    console.log("du är en very important person ");
}else{
    console.log("du är regular person");
}  */




//4) 2 conditions i en  if sats
// && och and
// || eller or
if(age >= 18 && vip == true){
    console.log("sant");
}else{
    console.log("false");
}

 




    

console.log("vidare . . . ");




