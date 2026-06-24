let foo = 5

let bar = 6

bar = "hej"

console.log(5 * 5)

console.log((2 + 2) * 3)

console.log("hej" + (1 + 1))
console.log(1 + 1 + "hej")

//P arentess
//E xponent
//M ultiplication
//D ivition
//A ddition
//S ubtraktion

// datatyper 2)

let x

//number
x = -7 // heltal, integer int , Long L
x = 0.25 // decimaltal, float f, Double   . decimaltecken

//string
x = "@" // tecken/karaktär, character char
x = "hejsan" // sträng, String Str (liknar en array av char)
x = `   hejsan
jag heter
Alrik He !
`
//boolean
x = false // boolean/boolean bool (kan bara vara true eller false)

//undefined
x = undefined // undefined

//string + string = string       konkatinerar, concatination
// "hej" + "san" = "hejsan"

//string + number = string
// "hej" + 1      =  "hej1"

//string + boolean = string
// "hej" + true    = "hejtrue"

//string + undefined = string
// "hej" + undefined = "hejundefined"

// number + number = number    kalkylerar  , calculation
//    1   +  1     =   2

// number + boolean = number
//    1   + true    =  2

// number + undefined = number
//    1   + undefined =  NaN

// boolean + boolean = number   kalkylerar  , calculation
//  true + false     = 1

// boolean + undefined = number
//  true + undefined   = NaN

// ifsatser  3)

// conditions
// ger tillbaka(retunerar ) en boolean
// 1 == 1   samma som värde
// 2 > 1    större än
// "hej" < "hejsan"    mindre än
// 1 >= 1   större än eller lika med
// 0 <= 1  mindre än eller lika med
// 1 === 1   samma som värde + datatypen
// 1 != 1 inte lika med  (! not / inte)

//  true && true   och and  ,   age >= 18 && driversLicense == true
//  true || false   or eller,   age >= 18 || driversLicense == true

let age = 34
let driversLicense = true

// serie 1]
if (age >= 18) {
    console.log("YES 1")
} else {
    console.log("NO 1")
}

if (driversLicense == true) {
    console.log("YES 2")
} else {
    console.log("NO 2")
}

// efter sant 2]

if (age >= 18) {
    console.log("YES 1")
    if (driversLicense == true) {
        console.log("YES 2")
    } else {
        console.log("NO 2")
    }
} else {
    console.log("NO 1")
}

//efter false 3]   else if sats

if (age >= 18) {
    console.log("YES 1")
} else {
    console.log("NO 1")
    if (driversLicense == true) {
        console.log("YES 2")
    } else {
        console.log("NO 2")
    }
}

if (age >= 18) {
    console.log("YES 1")
} else if (driversLicense == true) {
    console.log("YES 2")
} else {
    console.log("NO 2")
}


// 4 combinera alla conditions

if (age >= 18 && driversLicense == true) {
    console.log("YES")
} else {
    console.log("NO")
}





console.log("vidare..")

// ses nästa gång!! :)