// 2) datatyper


// string (js)
x = "hej" // String/str , strängar , text
x = '#' // character / char  , karaktär

// number (js)
x = -5   // integer/ int , heltal
x = 0.5  // float / f , decimaltal               
x = NaN  // tekniskt sätt nummer (js)
x = Infinity // tekniskt sätt nummer (js) 

// boolean 01010101101010
x = true // boolean/ bool , Boolean 

// undefined
x = undefined //(js)

//console.log(typeof x) // testa datatypen glöm ej parentess ibland

// string Dominant
// String + String = String // konkatination 
// String + number = String  // konkatination 
// String + boolean = String // konkatination 

// Number varierar om den kan kalkylera den 

// Number + Number = Number // kalkylation
// Number + boolean = Number // kalkylation

// boolean + boolean = number // kalkylation



//3) if satser
// ! not

//  condition
// == jämnför om det är sammma på båda sidorna
// ===  lika med + datatypen är samma
// < mindre än 
// > större än
// > större än eller lika med
// < mindre än eller lika med
// != inte lika med 
// !== inte lika med + datatypen är samma

// 1 ) if sats efter varandra
let age = 32
let vip = true

/* if(age >= 18  ){ // för true i parentess  
    console.log("Du är vuxen, kom in 1")
}else { // är till för om parentess är false
    console.log("Du får inte komma in på klubben 1")
}


if(vip == true  ){ // för true i parentess  
    console.log("Du kändis 2")
}else { // är till för om parentess är false
    console.log("Du en vanlig människa 2")
} */

// 2 )nästa ifsats efter sant på den första ifsatsen

/* if(age >= 18  ){ // för true i parentess  
    console.log("Du är vuxen, kom in 1")
    if(vip == true  ){ // för true i parentess  
        console.log("Du kändis 2")
    }else { // är till för om parentess är false
        console.log("Du en vanlig människa 2")
    }
}else { // är till för om parentess är false
    console.log("Du får inte komma in på klubben 1")

} */

// 3 ) nästa if sats efter false på den första ifsatsen
age = 10
if(age >= 18  ){ // för true i parentess  
    console.log("Du är vuxen, kom in 1")
}else { // är till för om parentess är false
    console.log("Du får inte komma in på klubben 1")
    if(vip == true  ){ // för true i parentess  
        console.log("Du kändis 2")
    }else { // är till för om parentess är false
        console.log("Du en vanlig människa 2")
    }
}

if(age >= 18  ) // för true i parentess  
    console.log("Du är vuxen, kom in 1")
else if(vip == true  ) // för true i parentess  
    console.log("Du kändis 2")
else  // är till för om parentess är false
    console.log("Du en vanlig människa 2")

//  2 conditions i en if sats
// && och and 
// || eller or altGr

if(age >= 18 || vip == true  ){ // för true i parentess  
    console.log("SANT")
}else { // är till för om parentess är false
    console.log("FALSE")
}
console.log("vidare...");