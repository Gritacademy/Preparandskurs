// if satser switch case
/* 
let age = 20

if (age == 18) {
    console.log("myndiga1 ifsats") //myndiga exakt
} else if (age == 20) {
    console.log("systembolaget ifsats") //systembolaget exakt
} else if (age == 67) {
    console.log("pension1 ifsats") //pension exakt
} else {
    console.log("inget speciellt ifsats")
}

//---------------- exakta värden så är switch case mer effektiv---------------------------------

switch (
    age //myndiga exakt
) {
    case 18:
        console.log("myndiga switch")
        break
    case 20:
        console.log("systembolaget switch")
        break
    case 67:
        console.log("pension switch") //pension exakt
        break

    default:
        console.log("inget speciellt switch")
        break
}
 */
//arryer
let foo = 5
foo = 10
// arrayer har en ordning
// index     0   1    2     3
let lista = ["11", 5, "hej", true, undefined]
lista[0] = 10 //square bracket [ ]

lista[4] = "tjenare"
lista.push("Alrik", "11", "11") //lägger till på slutet
lista.unshift("Maya1", "@", "MAya2", "&", 0, "2", "59", "öre", "Maya3") //lägger i början
lista.pop() //tar bort på slutet av arryen
lista.shift() //tar bort i början
lista.sort()
lista.reverse()

console.log(lista)
console.log(lista[3])

let queue = ["Hedda", "Christina", "Filip", "Maya", "Alrik","max","Anna"]

/* document.getElementById("display").innerHTML =
    queue[0] +
    "<br>" +
    queue[1] +
    "<br>" +
    queue[2] +
    "<br>" +
    queue[3] +
    "<br>" +
    queue[4] */

/* let i = 0
document.getElementById("display").innerHTML += queue[i] + "<br>"
i++
document.getElementById("display").innerHTML += queue[i] + "<br>"
i++
document.getElementById("display").innerHTML += queue[i] + "<br>"
i++
document.getElementById("display").innerHTML += queue[i] + "<br>"
i++
document.getElementById("display").innerHTML += queue[i] + "<br>"
 */


/* 
let  i = 0
while (i < 5) {
    document.getElementById("display").innerHTML += queue[i] + "<br>"
    i++
} */

/*
let  i = 0
while (i < 5) 
    document.getElementById("display").innerHTML += queue[i++] + "<br>"
 */
for (let i = 0; i < queue.length; i++)
    document.getElementById("display").innerHTML += queue[i] + "<br>"
    
/* 
let hej = ['h','e','j']
console.log("hejsan"[3]); // antal värden
console.log("hejsan".length); //string pga char i en array
console.log("hejsan".length); //string pga char i en array
shift + alt + a toogle kommenterar ni ett block
 */

let x = 0
x = x + 1 // ökar med 1
x += 1 // ökar med 1
x++ // ökar bara med 1

x = x - 1 // minskar med 1
x -= 1 //  minskar med 1
x-- // minskar bara med 1

x = x * 2 // multiplicerar med 2 (dubblar)
x *= 2 // multiplicerar med 2 (dubblar)

x = x / 2 // delat med 2 (halvera)
x /= 2 // delat med 2 (halvera)

// loopar
// while

if (true) {
    console.log("YES")
} else {
    console.log("NO")
}

let count = 10
while(count > 0){
    console.log("while loop: "+count)
    count -= 1
}


for(let count = 10; count > 0;  count -= 1 ){
    console.log("for loop: "+count)
}



console.warn("vidare...")