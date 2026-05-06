// Datatyper 2)

let x

//number
x = -1000 //heltal  , integer int, Long L.
x = 0.25 //decimaltal , float f , Double D.

//String
x = "#sdfsd" //tecken, character char.
x = "text" //sträng, String str.
x = `sdfsdf    
sdf
sdfsdf
sdfsdf
sdf
` // flera rader string

//boolean
x = true // boolean, boolean bool.

//undefined
x = undefined //odefinerat , undefined

// plus/addition

//string + string = string   //konkatination concatination concat
//"hej" + "hej" = "hejhej"

//string + number = string
//"hej" + 1 = "hej1"

//string + boolean = string
//"hej" + true = "hejtrue"

//string + undefined = string
//"hej" + undefined = "hejundefined"

//number + number = number   //kalkyleras calculation calc
//1  +  1  =  2

//number + boolean = number
//1 + true = 2

//number + undefined = number
// 1 + undefined = NaN

//boolean + boolean = number //kalkyleras
//true + false = 1

console.log(typeof x)

//if satser 3)
let z = 55

if (true) {
    console.log("YES" + z)
} else {
    console.log("NOO!!!")
}

let age = 33
//konditioner conditions
// alltid ger en boolean datatype
1 + 1 == 2 // == jämnför vänstersida med högersida
1 < 2 // < mindre än
2 > 1 // större än
age >= 18 // större eller likamed
1 != 1 // inte likamed,  ! betyder inte/not
1 === 1 // lika värde + samma datatyp

//document.getElementById("onOff").addEventListener("click", ()=>{  alert("hejsan") })
let state = false
document.getElementById("onOff").onclick = () => {
    state = !state
    if (state) {
        alert("the webbsite is ON")
        document.body.style.backgroundColor = "white"
    } else {
        alert("the webbsite is OFF")
        document.body.style.backgroundColor = "black"
    }
}

let checkbox = document.getElementById("check").checked
let button = document.getElementById("btn")

button.onclick = () => {
    let number = document.getElementById("number").valueAsNumber

    if (number >= 18) {
        console.log("JAG ÄR VUXEN!!!")
    } else {
        console.log("JAG ÄR ETT BARN!!!")
        window.location.href = "http://www.google.com"; // redirectar er till google
    }
}
