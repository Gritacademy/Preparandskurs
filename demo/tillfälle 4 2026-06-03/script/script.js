//sannings värden
//falsy values
/* 
if (  null  ) {
    console.warn("YES")
}else {
    console.error("NOO!!!")
} 
 */

//funktioner

let foo = 5
console.log(foo)

//hoisting
alriksFunktion() // kalla/anropa/invokera ; call,invoke  alriksFunktion()

function alriksFunktion() {
    // definerat en funktion som heter alriksfunktion
    let x = 2
    x++ // ökar med 1
    console.log(x)
}

// (parameter)
function addition(tal1, tal2 = 1) {
    console.log(tal1 + tal2)
    return tal1 + tal2
    console.log("hejsan!!!!")
}

function addition2() {
    let tal1 = document.getElementById("tal1").valueAsNumber
    let tal2 = document.getElementById("tal2").valueAsNumber
    console.log(tal1 + tal2)
}

function subtraction() {
    let tal1 = document.getElementById("tal1").valueAsNumber
    let tal2 = document.getElementById("tal2").valueAsNumber
    console.log(tal1 - tal2)
}

function infinity() {
    console.log("infinity")
    beyond()
}

function beyond() {
    console.log("beyond")
    infinity()
}
let lista = [1, 2, 3]
lista.pop()

"hej"[0] // get "h" beter sig som en array med index siffror
"hej".charAt(0) //get "h",

let variabel = addition
let minusBtn = document.getElementById("minus")

minusBtn.onclick = subtraction

//* avancerat */
/* minusBtn.onclick = ()=>{ 
    let tal1 = document.getElementById("tal1").valueAsNumber;
    let tal2 = document.getElementById("tal2").valueAsNumber;
    console.log(tal1 - tal2);
} */

/* minusBtn.addEventListener("click",subtraction) */ //* avancerat */
minusBtn.addEventListener("click", () => {
    //* avancerat */
    let tal1 = document.getElementById("tal1").valueAsNumber
    let tal2 = document.getElementById("tal2").valueAsNumber
    console.log(tal1 - tal2)
})

let bar = 88
console.log(bar)

/* alert()
Math.random()
Math.floor(0.5) 
Math.ceil(0.5)  */

for (let i = 0; i < 2; i++) {
    console.log(i, "loop")
    if (i == 1) break
}
/* //loop
break

//funtion
return
 */

//return

// Object 7)

// variabel
let foo2 = 5
foo2 = 10
// array
// index      0   1   2
let lista2 = [5, "hej", true]
lista[0] = 10
let hus = {
    pris:1000000,
    adress:"yxgatan 2b"
}


// property key:value pair
let child = {
    age: 5,
    greeting: "hejsan",
    happy: true,
    screem:cry,
    "ålder": 5,
    queue: ["Alrik","Dan","Johan","Bohdan",hus]
}

function cry() {
    console.error("WWEEAW!!! ToT ")
}




//funktion eller metod?
/* alert()                  //funktion
document.getElementById()   //metod
Math.random()               //metod
console.log()   */          //metod


