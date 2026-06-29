let age = 20

if (age == 18) {
    console.log("Myndig") //myndig
} else if (age == 20) {
    console.log("systembolaget") // systembolaget
} else if (age == 67) {
    console.log("pension") // pension
} else {
    console.log("ingen speciell ålder")
}

switch (age) {
    case 18:
        console.log("Myndig 2") //myndig
        break
    case 20:
        console.log("systembolaget 2 ") //myndig
        break
    case 67:
        console.log("pension 2") //myndig
        break
    default:
        console.log("ingen speciell ålder 2")
        break
}

let foo = true
foo = 10

//index      0     1      2     3
let lista = [5, "!", true, 888, 1, "#", 2, undefined, "Hej"]
let lista2 = [1, 2, 3]
lista[0] = 10
lista[10] = false

lista.push("hejsan") //lägger till efteråt på arrayen
lista.pop() // tar bort från slutet
lista.unshift(99) //lägger till från början
lista.shift() // från början

lista.concat(lista2)

lista.includes() // känner av om den innehåller det värdet i parentessen
lista.sort()
lista.reverse()

console.log(lista.length)
console.log(lista)

let klubbMedlemar = [
    "Kristina",
    "Celia",
    "Helena",
    "Philip",
    "Alrik",
    "Mustafa",
]

//document.getElementById("display").innerHTML = klubbMedlemar.join("<br>")
/* document.getElementById("display").innerHTML =
    klubbMedlemar[0] +
    "<br>" +
    klubbMedlemar[1] +
    "<br>" +
    klubbMedlemar[2] +
    "<br>" +
    klubbMedlemar[3] +
    "<br>" +
    klubbMedlemar[4] +
    "<br>" +
    klubbMedlemar[5]
 */ //shift + alt + a är  toogle block kommentar
//loopar

if (false) console.log("YES")
else console.log("NOO")

let x = 0
//ökar 
x = x + 1
x += 1
x++ //bara med 1

//reducerar med 1
x = x - 1
x -= 1
x--

//multiplicerar
x = x * 2
x *= 2

// dividerar
x = x / 2
x /= 2


let count = 0
while (count < 3) {
    console.log("whileLoop " + count)
    count++
}

count = 10
while (count >= 0) {
    console.log("Loop " + count )
    count--
}

 count = 0
while ( count < 3) {
    console.log("for Loop " + count)
    count++
}

/* count = 0
while (count < klubbMedlemar.length) {
    document.getElementById("display").innerHTML += "medlem " + count +" är: "+ klubbMedlemar[count] + "<br>"
    console.log("medlem " + count +" är: "+ klubbMedlemar[count])
    count++
} */

for (let i = 0; i < 100; i++) {
    document.getElementById("display").innerHTML+=  '<img width="100" src="https://cataas.com/cat" alt=""></img>'
}
   // document.getElementById("display").innerHTML += "medlem " + i +" är: "+ klubbMedlemar[i] + "<br>"  


console.warn("vidare...")
