let age = 68
if (age == 18)
    //myndig
    console.log("myndig")
else if (age == 20)
    //systembolaget
    console.log("systembolaget")
else if (age == 67)
    //pension
    console.log("pension")
else
    //ingen specifik ålder
    console.log("ingen specifikt")

switch (age) {
    case 18:
        console.log("myndig 2")
        break
    case 20:
        console.log("systembolaget 2")
        break
    case 67:
        console.log("pension 2")
        break
    default:
        console.log("ingen specifikt")
        break
}

// arrayer 4)

let foo = 5
foo = 10
console.log(foo)

//index siffran  0   1     2    3
let lista = [5, "hej", true, false]
lista[0] = "}"
lista[4] = 20
lista[10] = 20
lista[11] = 2
lista[12] = undefined
lista[13] = "Alrik"
lista[14] = "#"
lista[15] = "!"
lista[16] = "alrik"

lista.length // hämta ut längden på arrayn
lista.push(99) //lägg till på slutet
lista.pop() //tarbort från slutet

lista.unshift(88) //lägg till från början
lista.shift() //tar bort från början

lista.includes(10) // ger sant om 10 finns i arrayen

lista.concat(["Alrik", "Bohdan", "Johan", "Zelal"])

lista.sort() // unicode sorterat

lista.reverse()

//console.log(lista);

let queue = ["Alrik", "Johan", "Bohdan", "Zelal"]
let divDOM = document.getElementById("display")


for (let i = 0;  i < queue.length; i++) 
    divDOM.innerHTML += queue[i] + " är på köplats: " + (i+1) + "<br>"


let x = 0

x = x + 1 // ökar med 1
x += 1 // ökar med 1
x++ // ökar bara med 1

x = x - 1 // minskar med 1
x -= 1 // minskar med 1
x-- // minskar med bara 1

x = x * 2 // dubbla
x *= 2

x = x / 2 //halverar
x /= 2

// loopar  5)

// while loop

if (true) {
    console.log("YES")
} else {
    console.log("NO")
}

i = 0
while (i < 3) {
    console.log("while LOOP " + i)
    i++
}

//for loop

for (let i = 0; i < 100; i++) {
    console.log("for LOOP " + i)
    //document.getElementById("display").innerHTML += '    <img width="50" src="https://cataas.com/cat" >'
}

console.log("vidare....")
