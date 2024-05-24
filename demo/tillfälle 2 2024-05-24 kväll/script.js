// 2) datatyper

let x

//string
x = 'hej' // str String / sträng
x = '?' //  char character / karaktär

// number
x = -9000 // int integer , long / heltal
x = 0.5 // f float , double / decimaltal

// boolean
x = true // boolean / boolean

x = undefined

x = {}

// String + String = String //konkatination
// String + number = String //konkatination
// String + boolean = String //konkatination

// number + number = number  //kalkylation
// number + boolean = number //kalkylation

// boolean + boolean = number //kalkylation
console.log(typeof 5)

//document.getElementById("inputAge").value = 888
//document.body.innerHTML += "<button> click here </button>"

// 4) if satser
// condition ger ut boolean
// == jämnförelse
// === jämnförelse + datatyp
// != inte lika med
// < mindre än
// > större än
// >=  större än eller likamed
// <= mindre än  eller likamed

!true
!false

let age = 10
let vip = true
/* 
if (age >= 18) {
    console.log('du är gammal nog att komma in i klubben 1')
} else {
    console.log('du för ung tyvärr 1 ')
}


if (vip == true) {
    console.log('du är en kändis!!!! 2')
} else {
    console.log('du är en vanlig människa... 2')
}
 */

// 2) om sant gå till nästa if sats

/* if (age >= 18) {
    console.log('du är gammal nog att komma in i klubben 1')
    if (vip == true) {
        console.log('du är en kändis!!!! 2')
    } else {
        console.log('du är en vanlig människa... 2')
    }
} else {
    console.log('du för ung tyvärr 1 ')
} */


// 3) om falskt gå till nästa fråga
if (age >= 18) {
    console.log('du är gammal nog att komma in i klubben 1')
} else {
    console.log('du för ung tyvärr 1 ')
    if (vip == true) {
        console.log('du är en kändis!!!! 2')
    } else {
        console.log('du är en vanlig människa... 2')
    }
}

// 
if (age >= 18) 
    console.log('du är gammal nog att komma in i klubben 1')
else if (vip == true) 
    console.log('du är en kändis!!!! 2')
else 
    console.log('du är en vanlig människa... 2')



//4) båda condition i samma parentess
// && och  and
// || eller or


if (age >= 18 &&  vip == true)
    console.log('YES')
else 
    console.log('NO')
